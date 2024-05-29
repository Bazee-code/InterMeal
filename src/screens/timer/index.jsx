import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState, useCallback, useMemo, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import TimerSection from './TimerSection';
import TipsSection from './TipsSection';
import FastingPeriod from './FastingPeriod';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const TimerScreen = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [fastingWindow, setFastingWindow] = useState(0);

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['30%', '55%', '90'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOpenSheet = useCallback(() => {
    return bottomSheetRef.current?.present();
  }, []);

  const handleCloseSheet = useCallback(() => {
    return bottomSheetRef.current?.close();
  }, []);

  const storedFastWindow = storage.getString('fastingWindow');

  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={{backgroundColor: '#fb9f9f'}}>
        <ScrollView
          contentContainerStyle={{margin: 10}}
          showsVerticalScrollIndicator={false}>
          <TimerSection
            startTimer={startTimer}
            setStartTimer={setStartTimer}
            handleOpenSheet={handleOpenSheet}
            fastingWindow={fastingWindow}
            storedFastWindow={storedFastWindow}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            storage={storage}
          />
          <TipsSection startTimer={startTimer} setStartTimer={setStartTimer} />
          <View style={{marginBottom: 30}} />
        </ScrollView>

        <BottomSheetModalProvider>
          <View style={styles.container}>
            <BottomSheetModal
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundStyle={{
                backgroundColor: '#fb9f9f',
              }}>
              <BottomSheetView style={styles.contentContainer}>
                <FastingPeriod
                  handleCloseSheet={handleCloseSheet}
                  fastingWindow={fastingWindow}
                  setFastingWindow={setFastingWindow}
                />
              </BottomSheetView>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fb9f9f',
  },
  contentContainer: {
    backgroundColor: '#fb9f9f',
    flex: 1,
  },
});
export default TimerScreen;
