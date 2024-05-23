import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import {Checkbox, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../../navigation/routes';
import {Controller, useForm} from 'react-hook-form';
import {useLoginMutation} from '../../../redux/services/auth/authActions';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthStatus, setUser} from '../../../redux/services/auth/authSlice';
import * as Keychain from 'react-native-keychain';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation();

  const handleLogin = async data => {
    const loginData = login(data)
      .unwrap()
      .then(loginData => {
        if (loginData?.success === 'success') {
          dispatch(setUser({...loginData}));
          dispatch(setAuthStatus(true));
          Keychain.setGenericPassword('session', loginData?.accessToken);
        }
      })
      .catch(e => {
        Alert.alert('Error', `${e?.data?.msg}`, [
          {text: 'OK', onPress: () => dispatch(setAuthStatus(false))},
        ]);
      });

    return loginData;
  };
  const handleRegister = () => {
    navigation.navigate(Routes.REGISTER_SCREEN);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.subTitle}>
          Continue taking control of your health.
        </Text>
        <View style={{marginTop: 30}}>
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
              // minLength: {
              //   value: 6,
              //   message: 'Password should be at least 6 characters',
              // },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                label={'Password'}
                showPassword={showPassword}
                left={
                  <TextInput.Icon icon="lock" size={18} color={'#fb9f9f'} />
                }
                right={
                  showPassword ? (
                    <TextInput.Icon
                      icon="eye-off"
                      size={18}
                      color={'#fb9f9f'}
                      onPress={handleShowPassword}
                    />
                  ) : (
                    <TextInput.Icon
                      icon="eye"
                      size={18}
                      color={'#fb9f9f'}
                      onPress={handleShowPassword}
                    />
                  )
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
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleLogin)}>
            <Text style={[styles.subTitle, {fontWeight: '500'}]}>Sign in</Text>
            {isLoading && (
              <ActivityIndicator color={'#191919'} style={{marginLeft: 3}} />
            )}
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
