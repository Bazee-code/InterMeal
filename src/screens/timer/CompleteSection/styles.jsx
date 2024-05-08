import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: '#fb9f9f',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1b1b1b',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -140,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginTop: 10,
  },
  detailText: {
    color: '#959595',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 10,
  },
  detailSection: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.45,
  },
  buttonText: {
    color: '#191919',
    fontSize: 15,
    margin: 10,
    fontWeight: '700',
  },
  feedbackContainer: {
    backgroundColor: '#FFF',
    width: windowWidth * 0.95,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  feedbackButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  emojiText: {
    color: '#191919',
    fontSize: 15,
    fontWeight: '500',
  },
  footerButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.45,
    marginTop: 20,
    padding: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
