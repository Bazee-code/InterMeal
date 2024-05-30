import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  button: {
    width: windowWidth * 0.93,
    borderRadius: 15,
    backgroundColor: '#191919',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    margin: 10,
  },
});
