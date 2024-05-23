import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderSection from './HeaderSection';
import HistorySection from './HistorySection';
import {windowHeight} from '../../utils';
import LegalSection from './LegalSection';
import {useUserDetailsQuery} from '../../redux/services/user/userActions';

const ProfileScreen = () => {
  const {data, isLoading} = useUserDetailsQuery();
  console.log('data', data);

  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View
        style={{backgroundColor: '#fb9f9f', margin: 10, height: windowHeight}}>
        <HeaderSection data={data} />
        <HistorySection />
        <LegalSection />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
