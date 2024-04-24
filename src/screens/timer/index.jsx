import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import TimerSection from './TimerSection';
import TipsSection from './TipsSection';

const TimerScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={{backgroundColor: '#fb9f9f'}}>
        <ScrollView
          contentContainerStyle={{margin: 10}}
          showsVerticalScrollIndicator={false}>
          <TimerSection />
          <TipsSection />
          <View style={{marginBottom: 30}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TimerScreen;
