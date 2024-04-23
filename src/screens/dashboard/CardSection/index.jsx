import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import {Button, ProgressBar, MD3Colors} from 'react-native-paper';

const CardSection = () => {
  return (
    <View>
      <Text style={styles.title}>Daily tasks</Text>
      <View>
        <View style={styles.cardContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="timer-cog"
              size={25}
              color="#F97C00"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Start fasting</Text>
          </View>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Button>
        </View>

        <View style={[styles.cardContainer, {marginTop: 15}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon1 name="watch" size={25} color="#F97C00" style={styles.icon} />
            <View>
              <Text style={styles.cardTitle}>Do 7 min workout</Text>
              <Text style={styles.cardSubTitle}>35 kcal burned</Text>
            </View>
          </View>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Button>
        </View>

        <View style={[styles.cardContainer, {marginTop: 15}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon2
              name="weight-scale"
              size={25}
              color="#F97C00"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Weigh in</Text>
          </View>
          <Button style={[styles.button, {backgroundColor: '#FFF'}]}>
            <Text style={styles.buttonText}>Start</Text>
          </Button>
        </View>

        <View style={[styles.cardContainer, {marginTop: 15}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon2
              name="bottle-water"
              size={25}
              color="#F97C00"
              style={[styles.icon, {paddingHorizontal: 15}]}
            />
            <View>
              <Text style={styles.cardTitle}>Track hydration</Text>
              <View>
                <View style={styles.progressBarContainer}>
                  <Text style={styles.cardSubTitle}>450 ml</Text>
                  <Text style={styles.cardSubTitle}>2000 ml</Text>
                </View>
                <ProgressBar
                  progress={0.6}
                  color={MD3Colors.error50}
                  style={styles.progressBar}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.cardContainer, {marginTop: 15}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="shoe-sneaker"
              size={25}
              color="#F97C00"
              style={[styles.icon, {paddingHorizontal: 11}]}
            />
            <View>
              <Text style={styles.cardTitle}>Walk</Text>
              <View style={styles.progressBarContainer}>
                <Text style={styles.cardSubTitle}>1000 m</Text>
                <Text style={styles.cardSubTitle}>7000 m</Text>
              </View>
              <ProgressBar
                progress={0.4}
                color={MD3Colors.error50}
                style={styles.progressBar}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSection;
