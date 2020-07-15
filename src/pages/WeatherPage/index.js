import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {getWeatherByLatLgn} from '../../services/weatherService';
import {baseImgUrl} from '../../consts/baseImgUrl';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const WeatherPage = () => {
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    // Geolocation.getCurrentPosition((info) => {
    //   getUserLocation(info.coords.latitude, info.coords.longitude);
    // });
    // Geolocation.watchPosition((success) => {
    //   getUserLocation(success.coords.latitude, success.coords.longitude);
    // });
  }, []);

  const getUserLocation = async (latidude, longitude) => {
    const weatherData = await getWeatherByLatLgn(latidude, longitude);
    setWeatherInfo(weatherData);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#E1C0CB', '#C0BBE4', '#90A8FE']}
        style={{flex: 1}}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          <>
            <View style={styles.topContainer}>
              <View style={styles.locationContainer}>
                <View style={{flex: 0.6, alignItems:'center'}}>
                  <Text style={styles.location}>
                    {weatherInfo.name}, {weatherInfo.sys.country}
                  </Text>
                </View>
                  <View
                    style={{
                      flex: 0.3,
                      padding: 20,
                    justifyContent: 'center',
                    alignItems:"center",
                    borderRadius: 500,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}>
                  <Text style={styles.temperature}>
                    {weatherInfo.main.temp.toFixed(1)}º C
                  </Text>
                </View>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={{
                    uri: baseImgUrl + `${weatherInfo.weather[0].icon}@2x.png`,
                  }}
                  style={styles.weatherImg}
                />
                <Text style={styles.weatherCondition}>
                  {weatherInfo.weather[0].description.charAt(0).toUpperCase() +
                    weatherInfo.weather[0].description.slice(1)}
                </Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.infoLabel}>Umidade</Text>
                <Text style={styles.infoLabel}>Sensação térmica</Text>
                <Text style={styles.infoLabel}>Pressão</Text>
                <Text style={styles.infoLabel}>Velocidade do vento</Text>
              </View>
              <View>
                <Text style={styles.infoValue}>
                  {weatherInfo.main.humidity}%
                </Text>
                <Text style={styles.infoValue}>
                  {weatherInfo.main.feels_like}º C
                </Text>
                <Text style={styles.infoValue}>
                  {weatherInfo.main.pressure} hPa
                </Text>
                <Text style={styles.infoValue}>
                  {weatherInfo.wind.speed} m/s
                </Text>
              </View>
            </View>
          </>
        )}
      </LinearGradient>
    </View>
  );
};

export default WeatherPage;
