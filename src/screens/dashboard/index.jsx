import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CardSection from './CardSection';
import InsightsSection from './InsightsSection';
import {ScrollView} from 'react-native-gesture-handler';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={{backgroundColor: '#fb9f9f'}}>
        <ScrollView
          contentContainerStyle={{margin: 10}}
          showsVerticalScrollIndicator={false}>
          <CardSection />
          <InsightsSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
