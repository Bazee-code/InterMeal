import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import Timer from '../../../components/Timer';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../../navigation/routes';
import {useSelector} from 'react-redux';
import {useAddFastingTimeMutation} from '../../../redux/services/fastingtime/fastingActions';

const CompleteSection = () => {
  const navigation = useNavigation();

  const {startTime, endTime, timeElapsed} = useSelector(state => state?.auth);

  const [addFastingTime, {isLoading}] = useAddFastingTimeMutation();

  const formattedDuration = timeElapsed?.split(' ')[0];

  const handleConfirm = () => {
    const data = {
      starttime: startTime,
      endtime: endTime,
      duration: parseInt(formattedDuration),
    };
    const fastingTime = addFastingTime(data)
      .unwrap()
      .then(data => {
        if (data?.success === 'success') {
          Alert.alert('Saved', 'Your progress was saved', [
            {text: 'OK', onPress: () => navigation.push(Routes.TIMER_SCREEN)},
          ]);
        }
      })
      .catch(e =>
        Alert.alert('Error', `${e?.data?.msg}`, [
          {text: 'OK', onPress: () => console.log('ok pressed')},
        ]),
      );

    return fastingTime;
  };

  const handleDelete = () =>
    Alert.alert('Confirm', 'Are you sure you want to delete your session?', [
      {
        text: 'No',
        onPress: () => {
          console.log('cancel pressed');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          navigation.push(Routes.TIMER_SCREEN);
        },
      },
    ]);
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Timer />
        </View>
        <Text style={styles.title}>Well done!</Text>
        <Text style={styles.title}>You fasted for {timeElapsed}</Text>

        <View style={styles.detailContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast started</Text>
            <Text style={styles.buttonText}>{startTime}</Text>
          </View>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast ended</Text>
            <Text style={styles.buttonText}>{endTime}</Text>
          </View>
        </View>

        <View style={styles.feedbackContainer}>
          <Text style={[styles.title, {textAlign: 'center'}]}>
            How do you feel?
          </Text>
          <View style={styles.emojiContainer}>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon name="sad-cry" size={40} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Tired</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-sad" size={40} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-neutral" size={40} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-happy" size={40} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Happy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[styles.footerButton]}
            onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerButton,
              {marginLeft: 20, backgroundColor: '#191919'},
            ]}
            onPress={handleConfirm}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Save</Text>
            {isLoading && <ActivityIndicator color={'#FFF'} size={'small'} />}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteSection;
