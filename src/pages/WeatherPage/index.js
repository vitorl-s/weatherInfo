import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {getWeatherByLatLgn} from '../../services/weatherService';
import {baseImgUrl} from '../../consts/baseImgUrl';
import {Colors} from '../../consts/colors';
import Geolocation from '@react-native-community/geolocation';

// import { Container } from './styles';

const WeatherPage = () => {
  useEffect(() => {
    //getWeatherByLatLgn(-15, -47);
    //Geolocation.getCurrentPosition((info) => console.log(info));
  });
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={{marginTop: 50, flex: 0.5}}>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 30, color: Colors.text}}>Brasília, BR</Text>
          <Text style={{fontSize: 26, color: Colors.text}}>25º C</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Image
            source={{uri: baseImgUrl + '04d@2x.png'}}
            style={{width: 75, height: 75, resizeMode: 'contain'}}
          />
          <Text style={{color: Colors.text}}>Nublado</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 20, color: Colors.text, marginTop: 10}}>
            Umidade
          </Text>
          <Text style={{fontSize: 20, color: Colors.text, marginTop: 10}}>
            Sensação térmica
          </Text>
          <Text style={{ fontSize: 20, color: Colors.text, marginTop: 10 }}>
            Pressão
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 18, color: Colors.text, marginTop: 10}}>
            {' '}
            25%
          </Text>
          <Text style={{fontSize: 18, color: Colors.text, marginTop: 10}}>
            {' '}
            22º C
          </Text>
          <Text style={{ fontSize: 18, color: Colors.text, marginTop: 10 }}>
            {' '}
            1010 hPa
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherPage;
