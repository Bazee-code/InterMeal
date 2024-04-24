import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';

const HistorySection = () => {
  return (
    <View>
      <View
        style={[
          styles.container,
          styles.firstCardContainer,
          {borderTopRightRadius: 15, borderTopLeftRadius: 15, marginTop: 30},
        ]}>
        <View style={styles.leftContainer}>
          <Icon name="user" size={20} color="#F97000" />
          <Text style={styles.cardText}>Personal info</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <View style={[styles.container, styles.firstCardContainer]}>
        <View style={styles.leftContainer}>
          <Icon name="clockcircleo" size={20} color="#F97000" />
          <Text style={styles.cardText}>Fasting history</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <View
        style={[
          styles.container,
          {borderBottomRightRadius: 15, borderBottomLeftRadius: 15},
        ]}>
        <View style={styles.leftContainer}>
          {/* <Icon3 name="bell" size={20} color="#F97000" /> */}
          <Icon2 name="scale-outline" size={20} color="#F97000" />
          <Text style={styles.cardText}>Weight history</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
    </View>
  );
};

export default HistorySection;
