import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#191919',
    fontSize: 23,
    margin: 10,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#FFF',
    padding: 10,
    width: windowWidth * 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#191919',
    fontSize: 15,
    margin: 10,
    fontWeight: '700',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    marginTop: 20,
  },
  detailText: {
    color: '#959595',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 20,
  },
  detailSection: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.45,
  },
});
