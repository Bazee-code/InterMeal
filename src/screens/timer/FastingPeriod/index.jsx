import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useMemo} from 'react';
import {styles} from './styles';
import RadioGroup from 'react-native-radio-buttons-group';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const FastingPeriod = ({handleCloseSheet, fastingWindow, setFastingWindow}) => {
  const radioButtons = useMemo(
    () => [
      {
        id: '12',
        label: '12 hours',
        value: '12',
      },
      {
        id: '14',
        label: '14 hours',
        value: '14',
      },
      {
        id: '16',
        label: '16 hours',
        value: '16',
      },
      {
        id: '18',
        label: '18 hours',
        value: '18',
      },
      {
        id: '20',
        label: '20 hours',
        value: '20',
      },
      {
        id: '22',
        label: '22 hours',
        value: '22',
      },
      {
        id: '24',
        label: '24 hours',
        value: '24',
      },
    ],
    [],
  );

  const handleConfirm = () => {
    return Alert.alert(
      'Success',
      `Your fasting window has been set to ${fastingWindow} hours a day`,
      [
        {
          text: 'ok',
          onPress: () => {
            storage.set('fastingWindow', fastingWindow);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a fasting window</Text>

      <RadioGroup
        radioButtons={radioButtons}
        onPress={value => setFastingWindow(value)}
        selectedId={fastingWindow}
        containerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginTop: 10,
        }}
        labelStyle={{
          fontSize: 16,
          fontWeight: '500',
          color: '#000',
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCloseSheet();
          handleConfirm();
        }}>
        <Text style={styles.buttonText}>Set fasting window</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FastingPeriod;
