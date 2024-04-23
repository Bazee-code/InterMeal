import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const TipsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tips for fasting time</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark" />
        <Text style={styles.subText}>
          Eat 2-3 meals, 1-2 snacks are optional
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark" />
        <Text style={styles.subText}>
          Eat 2-3 meals, 1-2 snacks are optional
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark" />
        <Text style={styles.subText}>
          Eat 2-3 meals, 1-2 snacks are optional
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark" />
        <Text style={styles.subText}>
          Eat 2-3 meals, 1-2 snacks are optional
        </Text>
      </View>
    </View>
  );
};

export default TipsSection;
