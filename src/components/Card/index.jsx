import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Card = ({id, title, icon, button}) => {
  return (
    <View style={styles.container} key={id}>
      <Text>Icon</Text>
      <Text>{title}</Text>
      <Text>Button here</Text>
    </View>
  );
};

export default Card;
