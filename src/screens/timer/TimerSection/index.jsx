import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {windowWidth} from '../../../utils';
import StopwatchTimer, {
  StopwatchTimerMethods,
} from 'react-native-animated-stopwatch-timer';

const TimerSection = () => {
  const stopwatchTimerRef = useRef(null);
  const [startTimer, setStartTimer] = useState(false);

  const handlePlay = () => {
    return stopwatchTimerRef.current?.play();
  };

  const handlePause = () => {
    return stopwatchTimerRef.current?.pause();
  };

  const handleReset = () => {
    return stopwatchTimerRef.current?.reset();
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles?.title}>You're fasting</Text>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>16:8 fasting</Text>
          <Icon name="edit" color="#F97C00" size={18} />
        </Button>
        <View style={{marginTop: 20}}>
          {/* <View style={styles.timerContainer}> */}
          {/* <Text style={[styles?.title, {fontSize: 30}]}>11:11:11</Text> */}
          <StopwatchTimer
            ref={stopwatchTimerRef}
            mode="timer"
            initialTimeInMs={3636200}
            trailingZeros={2}
            containerStyle={styles.timerContainer}
            leadingZeros={1}
            enterAnimationType="slide-in-down"
            textCharStyle={[styles.title, {fontSize: 30, margin: 5}]}
            decimalSeparator=":"
          />
          {/* </View> */}
          <AnimatedCircularProgress
            size={windowWidth * 0.83}
            width={40}
            fill={90}
            tintColor="#F97C00"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#D00D00"
          />
        </View>
        <Button
          style={[styles.button, {marginTop: 20, backgroundColor: '#191919'}]}
          onPress={handlePlay}>
          <Text style={[styles.buttonText, {color: '#FFF'}]}>End fast</Text>
        </Button>
      </View>
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
    </View>
  );
};

export default TimerSection;
