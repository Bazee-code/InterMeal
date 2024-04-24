import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {windowWidth} from '../../../utils';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';

const ChartSection = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fasting Tracker</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 5}}>
          <Icon
            name="bar-graph"
            size={25}
            style={{marginRight: 5}}
            color="#F97C00"
          />
          <Icon1
            name="linechart"
            size={25}
            style={{marginRight: 5}}
            color="#F97C00"
          />
        </View>
      </View>
      <View style={styles.fastingContainer}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Weekly</Text>
          </Button>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Monthly</Text>
          </Button>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Yearly</Text>
          </Button>
        </View>
        <View>
          <LineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  data: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
                },
              ],
            }}
            width={windowWidth * 0.9}
            height={300}
            yAxisSuffix="hrs"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: '#F97C00',
              backgroundGradientFrom: '#F97C00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 5,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              //   borderRadius: 16,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChartSection;
