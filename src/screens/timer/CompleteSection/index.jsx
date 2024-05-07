import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';

const CompleteSection = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fb9f9f'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Well done!</Text>
        <Text style={styles.title}>You fasted for 18h 30min</Text>

        <View style={styles.detailContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast started</Text>
            <Text style={styles.buttonText}>Yesterday,8:00pm</Text>
          </View>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>Fast ended</Text>
            <Text style={styles.buttonText}>Today,8:00pm</Text>
          </View>
        </View>

        <View style={styles.feedbackContainer}>
          <Text style={[styles.title, {textAlign: 'center'}]}>
            How do you feel?
          </Text>
          <View style={styles.emojiContainer}>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon name="sad-cry" size={50} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Tired</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-sad" size={50} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Sad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-neutral" size={50} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Icon2 name="emoji-happy" size={50} color={'#fbdc34'} />
              <Text style={styles.emojiText}>Happy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={[styles.footerButton]}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerButton,
              {marginLeft: 20, backgroundColor: '#191919'},
            ]}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteSection;
