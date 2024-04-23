import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.95,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  title: {color: '#191919', fontSize: 15, margin: 10, fontWeight: '700'},
  subText: {color: '#959595', fontSize: 15, margin: 10, fontWeight: '700'},
});
