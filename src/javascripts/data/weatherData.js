import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// const DBUrl = 'api.openweathermap.org/data/2.5/forecast';
const api = firebaseConfig.apiKey;

const getWeather = () => new Promise((reject) => {
  axios.get(`api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=${api}`)
    .then((response) => console.warn(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
