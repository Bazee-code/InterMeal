import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const TimerSection = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles?.title}>You're fasting</Text>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>16:8 fasting</Text>
          <Icon name="edit" color="#F97C00" size={18} />
        </Button>
      </View>
    </View>
  );
};

export default TimerSection;
