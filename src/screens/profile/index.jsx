import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderSection from './HeaderSection';
import HistorySection from './HistorySection';
import {windowHeight} from '../../utils';
import LegalSection from './LegalSection';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const {} = useSelector(state => state.auth);
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View
        style={{backgroundColor: '#fb9f9f', margin: 10, height: windowHeight}}>
        <HeaderSection />
        <HistorySection />
        <LegalSection />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
