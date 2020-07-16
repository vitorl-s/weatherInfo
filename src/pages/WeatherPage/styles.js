import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../consts/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
  },
  topContainer: {
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  bottomContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.5,
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 1,
  },
  locationContainer: {
    marginLeft: 20,
    flex: 1,
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
    marginTop: 12,
  },
  circle: {
    flex: 0.3,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    borderColor: 'white',
    borderWidth: 5,
  },
  middleContainer: {
    flex: 0.6,
    alignItems: 'center',
  },
});

export default styles;
