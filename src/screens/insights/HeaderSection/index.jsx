import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const HeaderSection = () => {
  return (
    <View>
      <Text style={styles.title}>Your stats</Text>
      <View style={styles.container}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>51</Text>
          <Text style={styles.title}>288 h</Text>
          <Text style={styles.title}>18 h</Text>
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.subTitle}>total fasts</Text>
          <Text style={styles.subTitle}>total hours</Text>
          <Text style={styles.subTitle}>longest fast</Text>
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>93 </Text>
          <Text style={styles.title}>288 h</Text>
          <Text style={styles.title}>18 h</Text>
        </View>
        <View style={styles.cardTitle}>
          <Text style={styles.subTitle}>start weight</Text>
          <Text style={styles.subTitle}>current weight</Text>
          <Text style={styles.subTitle}>goal weight</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderSection;
