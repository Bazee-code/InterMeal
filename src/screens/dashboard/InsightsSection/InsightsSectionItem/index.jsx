import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const InsightsSectionItem = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item?.backgroundColor}]}>
      <Text>{item?.title}</Text>
      <View style={styles.iconContainer}>{item?.icon}</View>
    </View>
  );
};

export default InsightsSectionItem;
