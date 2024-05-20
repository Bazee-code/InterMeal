import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import {Checkbox, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../../navigation/routes';
import {Controller, useForm} from 'react-hook-form';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  const handleLogin = () => {
    navigation.navigate(Routes.LOGIN_SCREEN);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = data => console.log('register data', data);

  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Join InterMeals Today</Text>
        <Text style={styles.subTitle}>
          Join now & take control of your health.
        </Text>
        <View style={{marginTop: 50}}>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 10,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label={'Username'}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="userName"
          />

          {errors.userName && (
            <Text style={styles.errorText}>Username is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label={'Email'}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                left={
                  <TextInput.Icon icon="email" size={18} color={'#fb9f9f'} />
                }
              />
            )}
            name="email"
          />

          {errors.email && (
            <Text style={styles.errorText}>Email is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                label={'Password'}
                left={
                  <TextInput.Icon icon="lock" size={18} color={'#fb9f9f'} />
                }
                right={
                  <TextInput.Icon icon="eye" size={18} color={'#fb9f9f'} />
                }
              />
            )}
            name="password"
          />

          {errors.password && (
            <Text style={styles.errorText}>Password is required.</Text>
          )}
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
              I agree to InterMeals{' '}
              <Text style={{fontWeight: '700'}}>Terms & Conditions</Text>
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={[styles.subTitle, {fontWeight: '500'}]}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.subTitle,
            {fontWeight: '600', marginTop: 20, textDecorationLine: 'underline'},
          ]}
          onPress={handleLogin}>
          Already have an account ?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
