import {View, Text, Alert} from 'react-native';
import React, {useRef, useCallback} from 'react';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {windowWidth} from '../../../utils';
import StopwatchTimer, {
  StopwatchTimerMethods,
} from 'react-native-animated-stopwatch-timer';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../../navigation/routes';
import {MMKV} from 'react-native-mmkv';

const TimerSection = ({
  startTimer,
  setStartTimer,
  handleOpenSheet,
  fastingWindow,
}) => {
  const stopwatchTimerRef = useRef(null);
  const navigation = useNavigation();

  const handleTimeElapsed = () => {
    const ms = stopwatchTimerRef.current?.getSnapshot();

    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + ' Sec';
    else if (minutes < 60) return minutes + ' Min';
    else if (hours < 24) return hours + ' Hrs';
    else return days + ' Days';
  };

  const handleConfirm = () =>
    Alert.alert('Confirm', 'Are you sure you want to end your fast?', [
      {
        text: 'No',
        onPress: () => {
          handlePlay();
          setStartTimer(true);
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          handleTimeElapsed();
          handleReset();
          setStartTimer(false);
          navigation.push(Routes.SUCCESS_SCREEN, {item: handleTimeElapsed()});
        },
      },
    ]);

  const handlePlay = () => {
    if (fastingWindow == 0) {
      return Alert.alert('Error', 'Kindly select a fasting window first.', [
        {
          text: 'OK',
          onPress: () => {
            console.log('ok pressed');
          },
        },
      ]);
    }
    return stopwatchTimerRef.current?.play();
  };

  const handlePause = () => {
    stopwatchTimerRef.current?.pause();
    handleConfirm();
  };

  const handleReset = () => {
    stopwatchTimerRef.current?.reset();
  };

  const storage = new MMKV();
  const cachedFastValue = storage.getNumber('fastingWindow');

  return (
    <View>
      <View style={styles.titleContainer}>
        {startTimer ? (
          <Text style={styles?.title}>You're fasting</Text>
        ) : (
          <Text style={styles?.title}>It's eating time</Text>
        )}
        <Button style={styles.button} onPress={handleOpenSheet}>
          {fastingWindow == 12 ? (
            <Text style={styles.buttonText}>12:12 fasting</Text>
          ) : fastingWindow == 14 ? (
            <Text style={styles.buttonText}>14:10 fasting</Text>
          ) : fastingWindow == 16 ? (
            <Text style={styles.buttonText}>16:8 fasting</Text>
          ) : fastingWindow == 18 ? (
            <Text style={styles.buttonText}>18:6 fasting</Text>
          ) : fastingWindow == 20 ? (
            <Text style={styles.buttonText}>20:4 fasting</Text>
          ) : fastingWindow == 22 ? (
            <Text style={styles.buttonText}>22:2 fasting</Text>
          ) : fastingWindow == 24 ? (
            <Text style={styles.buttonText}>24h fasting</Text>
          ) : (
            <Text style={styles.buttonText}>Choose fasting window</Text>
          )}
          <Icon name="edit" color="#F97C00" size={18} />
        </Button>
        <View style={{marginTop: 20}}>
          <StopwatchTimer
            ref={stopwatchTimerRef}
            mode="stopwatch"
            trailingZeros={2}
            containerStyle={styles.timerContainer}
            leadingZeros={2}
            enterAnimationType="slide-in-down"
            textCharStyle={[styles.title, {fontSize: 30, margin: 5}]}
            decimalSeparator=":"
          />
          {/* {startTimer ? (
            <StopwatchTimer
              ref={stopwatchTimerRef}
              mode="stopwatch"
              trailingZeros={2}
              containerStyle={styles.timerContainer}
              leadingZeros={2}
              enterAnimationType="slide-in-down"
              textCharStyle={[styles.title, {fontSize: 30, margin: 5}]}
              decimalSeparator=":"
            />
          ) : (
            <View style={styles.eatingContainer}>
              <Text style={[styles?.title, {fontSize: 20}]}>
                10:00am - 6:00pm
              </Text>
            </View>
          )} */}

          <AnimatedCircularProgress
            size={windowWidth * 0.83}
            width={40}
            fill={90}
            tintColor="#F97C00"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#D00D00"
          />
        </View>
        {startTimer && fastingWindow > 0 ? (
          <Button
            style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
            onPress={() => {
              setStartTimer(false);
              handlePause();
            }}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>End fast</Text>
          </Button>
        ) : null}
        {fastingWindow > 0 && startTimer == false ? (
          <Button
            style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
            onPress={() => {
              setStartTimer(true);
              handlePlay();
            }}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>
              {`Start ${fastingWindow}h fast`}
            </Text>
          </Button>
        ) : null}
        {fastingWindow == 0 ? (
          <Button
            style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
            onPress={() => {
              handlePlay();
            }}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Start fast</Text>
          </Button>
        ) : null}
      </View>
      {startTimer && cachedFastValue ? (
        <View style={styles.detailContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast started</Text>
            <Text style={styles.buttonText}>Yesterday,8:00pm</Text>
          </View>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast ended</Text>
            <Text style={styles.buttonText}>Today,8:00pm</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default TimerSection;
