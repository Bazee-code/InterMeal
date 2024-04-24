import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: '#191919',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
  },
  firstCardContainer: {
    borderBottomColor: '#EDEDED',
    borderWidth: 1,
    borderTopColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
  },
});
