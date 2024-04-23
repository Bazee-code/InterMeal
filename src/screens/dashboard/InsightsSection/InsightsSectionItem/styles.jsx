import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: windowWidth * 0.4,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
});
