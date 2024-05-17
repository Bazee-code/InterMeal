import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import {Checkbox, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../../navigation/routes';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleRegister = () => {
    navigation.navigate(Routes.REGISTER_SCREEN);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.subTitle}>
          Continue taking control of your health.
        </Text>
        <View style={{marginTop: 30}}>
          <Input text={userName} setText={setUserName} label={'Username'} />
          {/* <Input
            text={email}
            setText={setEmail}
            label={'Email'}
            left={<TextInput.Icon icon="email" size={18} color={'#fb9f9f'} />}
          /> */}
          <Input
            text={password}
            setText={setPassword}
            label={'Password'}
            left={<TextInput.Icon icon="lock" size={18} color={'#fb9f9f'} />}
            right={<TextInput.Icon icon="eye" size={18} color={'#fb9f9f'} />}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBox}>
            <Checkbox.Android
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={'#fff'}
              uncheckedColor={'#000'}
            />
            <Text style={[styles.subTitle, {fontWeight: '500'}]}>
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={[styles.subTitle, {fontWeight: '600', marginRight: 3}]}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.subTitle, {fontWeight: '500'}]}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.subTitle,
            {fontWeight: '600', marginTop: 30, textDecorationLine: 'underline'},
          ]}
          onPress={handleRegister}>
          Don't have an account ?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
