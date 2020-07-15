import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../consts/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  topContainer: {
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 20,
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  locationContainer: {
    marginLeft: 20,
  },
  location: {
    fontSize: 38,
    color: Colors.text,
    marginTop: 25,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 34,
    color: Colors.text,
    fontWeight: 'bold',
  },
  weatherCondition: {
    color: Colors.text,
    fontSize: 24,
  },
  weatherImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  infoLabel: {
    fontSize: 20,
    color: Colors.text,
    marginTop: 10,
  },
  infoValue: {
    fontSize: 18,
    color: Colors.text,
    marginTop: 10,
  },
});

export default styles;
