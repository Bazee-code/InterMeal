import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const HeaderSection = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../../assets/card.png')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.icon}>
            <Icon name="camera" size={15} color="#F97000" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Eugene Obare</Text>
          <Text style={styles.subTitle}>You have lost 5 kgs</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderSection;
