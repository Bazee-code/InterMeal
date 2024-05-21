import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';
import * as Keychain from 'react-native-keychain';
import {useDispatch} from 'react-redux';
import {setAuthStatus} from '../../../redux/services/auth/authSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LegalSection = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await Keychain.resetGenericPassword();
    dispatch(setAuthStatus(false));
  };
  return (
    <View>
      <View
        style={[
          styles.container,
          styles.firstCardContainer,
          {borderTopRightRadius: 15, borderTopLeftRadius: 15, marginTop: 20},
        ]}>
        <View style={styles.leftContainer}>
          <Icon3 name="bell" size={20} color="#F97000" />
          <Text style={styles.cardText}>Notifications</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <View style={[styles.container, styles.firstCardContainer]}>
        <View style={styles.leftContainer}>
          <Icon name="creditcard" size={20} color="#F97000" />
          <Text style={styles.cardText}>Payment methods</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <View style={[styles.container, styles.firstCardContainer]}>
        <View style={styles.leftContainer}>
          <Icon3 name="phone-call" size={20} color="#F97000" />
          <Text style={styles.cardText}>Help & Support</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <View style={[styles.container, styles.firstCardContainer]}>
        <View style={styles.leftContainer}>
          <Icon name="book" size={20} color="#F97000" />
          <Text style={styles.cardText}>Legal</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </View>
      <TouchableOpacity
        style={[
          styles.container,
          {borderBottomRightRadius: 15, borderBottomLeftRadius: 15},
        ]}
        onPress={handleLogout}>
        <View style={styles.leftContainer}>
          <Icon1 name="logout" size={20} color="#F97000" />
          <Text style={[styles.cardText, {color: 'red'}]}>Logout</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default LegalSection;
