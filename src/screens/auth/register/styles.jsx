import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fb9f9f',
    height: windowHeight,
  },
  title: {
    color: '#191919',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '700',
  },
  subTitle: {
    color: '#191919',
    fontSize: 16,
    marginTop: 5,
  },
  checkBoxContainer: {
    marginVertical: 40,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F97C00',
    borderRadius: 15,
  },
  errorText: {fontSize: 13, color: 'red', textAlign: 'center', marginTop: 5},
});
