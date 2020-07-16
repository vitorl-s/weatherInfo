import {API} from './baseService/index';
import {API_KEY} from '../consts/apiKey';

export async function getWeatherByLatLgn(lat, lon) {
  try {
    const response = await API.get(
      `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pt_br`,
    );
    return Promise.resolve(response);
  } catch (error) {
    console.log('error weatherInfo', error);
  }
}
