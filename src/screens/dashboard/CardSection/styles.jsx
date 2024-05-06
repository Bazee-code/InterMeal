import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: '#191919',
    fontSize: 23,
    margin: 10,
    fontWeight: '700',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 90,
    width: windowWidth * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: '#191919',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
  },
  icon: {
    padding: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
  },
  cardSubTitle: {
    color: '#959595',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 20,
  },
  progressBar: {
    marginLeft: 20,
    width: windowWidth * 0.73,
    marginTop: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
