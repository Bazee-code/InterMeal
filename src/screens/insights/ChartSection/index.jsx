import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from 'react-native-paper';

const ChartSection = () => {
  return (
    <View>
      <Text style={styles.title}>Fasting Tracker</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>
          <Text>Weekly</Text>
        </Button>
        <Button style={styles.button}>
          <Text>Monthly</Text>
        </Button>
        <Button style={styles.button}>
          <Text>Yearly</Text>
        </Button>
      </View>
    </View>
  );
};

export default ChartSection;
