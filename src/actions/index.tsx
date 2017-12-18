import axios from 'axios';
import { FETCH_WEATHER, ERROR_NOT_FOUND } from './types';

const API_KEY: string = '0f5af9a15fa2bd90bdc735758131b0ec';
const ROOT_URL: string = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

// INTERFACES
import * as I from '../interfaces';
// TYPES
import * as T from '../types';

export const fetchWeather = (searchValues: I.Search): T.AWeather | object => {
    const { city, country } = searchValues;
    
    const url: string = `${ROOT_URL}&q=${city},${country}`;

    const response: T.AWeather | object = axios.get(url)
        .then( res => ({
            type: FETCH_WEATHER,
            payload: res
        }))
        .catch( error => {
            return {
                type: ERROR_NOT_FOUND,
                payload: error.response.status
            }
        });

    return response;
};