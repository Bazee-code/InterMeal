import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  title: {
    color: '#191919',
    fontSize: 23,
    margin: 10,
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFF',
    padding: 5,
    width: windowWidth * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#191919',
    fontSize: 15,
    margin: 10,
    fontWeight: '700',
  },
});
