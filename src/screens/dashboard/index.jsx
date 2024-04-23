import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CardSection from './CardSection';
import InsightsSection from './InsightsSection';
import {ScrollView} from 'react-native-gesture-handler';

const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{margin: 10}}>
        <CardSection />
        <InsightsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
