import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';

const Input = ({text, setText, label, left, right, onBlur, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={label}
        left={left}
        right={right}
        value={text}
        onChangeText={onChange}
        style={styles.input}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;
