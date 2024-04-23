import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import InsightsSectionItem from './InsightsSectionItem';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Ionicons';

const InsightsArr = [
  {
    id: 0,
    title: 'How to read food labels',
    icon: <Icon name="bottle-droplet" size={70} color={'#FFF'} />,
    backgroundColor: 'blue',
  },
  {
    id: 1,
    title: 'How to read food labels',
    icon: <Icon name="bottle-droplet" size={70} color={'#FFF'} />,
    backgroundColor: 'green',
  },
  {
    id: 2,
    title: 'How to read food labels',
    icon: <Icon name="bottle-droplet" size={70} color={'#FFF'} />,
    backgroundColor: 'red',
  },
  {
    id: 3,
    title: 'How to read food labels',
    icon: <Icon name="bottle-droplet" size={70} color={'#FFF'} />,
    backgroundColor: 'orange',
  },
  {
    id: 4,
    title: 'How to read food labels',
    icon: <Icon name="bottle-droplet" size={70} color={'#FFF'} />,
    backgroundColor: 'brown',
  },
];

const InsightsSection = () => {
  return (
    <View>
      <Text style={styles.title}>Insights For You</Text>
      <FlatList
        data={InsightsArr}
        renderItem={({item}) => <InsightsSectionItem item={item} />}
        initialNumToRender={4}
        horizontal
        keyExtractor={item => item?.id}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{marginBottom: 20}} />
    </View>
  );
};

export default InsightsSection;
