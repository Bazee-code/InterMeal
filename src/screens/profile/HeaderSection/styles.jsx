import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 10,
    marginTop: 20,
  },
  container: {flexDirection: 'row', alignItems: 'center'},
  title: {
    color: '#191919',
    fontSize: 23,
    fontWeight: '700',
  },
  subTitle: {
    color: '#F97000',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 5,
  },
  icon: {
    backgroundColor: '#FFF',
    position: 'absolute',
    padding: 6,
    right: 0,
    bottom: -5,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
  },
});
