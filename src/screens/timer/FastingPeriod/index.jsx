import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useMemo} from 'react';
import {styles} from './styles';
import RadioGroup from 'react-native-radio-buttons-group';

const FastingPeriod = ({handleCloseSheet}) => {
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: '12 hours',
        value: '12',
      },
      {
        id: '2',
        label: '14 hours',
        value: '14',
      },
      {
        id: '3',
        label: '16 hours',
        value: '16',
      },
      {
        id: '4',
        label: '18 hours',
        value: '18',
      },
      {
        id: '5',
        label: '20 hours',
        value: '20',
      },
      {
        id: '6',
        label: '22 hours',
        value: '22',
      },
      {
        id: '7',
        label: '24 hours',
        value: '24',
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a fasting window</Text>

      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
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

      <TouchableOpacity style={styles.button} onPress={handleCloseSheet}>
        <Text style={styles.buttonText}>Set fasting window</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FastingPeriod;
