import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderSection from './HeaderSection';
import ChartSection from './ChartSection';
import WeightChartSection from './WeightChartSection';

const InsightsScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={{backgroundColor: '#fb9f9f'}}>
        <ScrollView
          contentContainerStyle={{margin: 10}}
          showsVerticalScrollIndicator={false}>
          <HeaderSection />
          <ChartSection />
          <WeightChartSection />
          <View style={{marginBottom: 30}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InsightsScreen;
