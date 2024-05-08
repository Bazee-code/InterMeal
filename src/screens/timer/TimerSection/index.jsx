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

const TimerSection = ({startTimer, setStartTimer, handleOpenSheet}) => {
  const stopwatchTimerRef = useRef(null);
  const navigation = useNavigation();

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
          navigation.push(Routes.SUCCESS_SCREEN);
        },
      },
    ]);

  const handlePlay = () => {
    stopwatchTimerRef.current?.play();
  };

  const handlePause = () => {
    stopwatchTimerRef.current?.pause();
    handleConfirm();
  };

  const handleReset = () => {
    stopwatchTimerRef.current?.reset();
  };

  const handleTimeElapsed = () => {
    console.log('timeElapsed', stopwatchTimerRef.current?.getSnapshot());
    stopwatchTimerRef.current?.getSnapshot();
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        {startTimer ? (
          <Text style={styles?.title}>You're fasting</Text>
        ) : (
          <Text style={styles?.title}>It's eating time</Text>
        )}
        <Button style={styles.button} onPress={handleOpenSheet}>
          <Text style={styles.buttonText}>16:8 fasting</Text>
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
        {startTimer ? (
          <Button
            style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
            onPress={() => {
              setStartTimer(false);
              handlePause();
            }}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>End fast</Text>
          </Button>
        ) : (
          <Button
            style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
            onPress={() => {
              setStartTimer(true);
              handlePlay();
            }}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>
              Start 16h fast
            </Text>
          </Button>
        )}
      </View>
      {startTimer ? (
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
