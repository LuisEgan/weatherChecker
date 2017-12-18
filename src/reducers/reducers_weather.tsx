import { FETCH_WEATHER, ERROR_NOT_FOUND } from '../actions/types';

// INTERFACES
import * as I from '../interfaces';
// TYPES
import * as T from '../types';

const defaultState: I.StoreState = {
    city: {name: '', country: ''},
    weathers: [{
        date: '',
        time: 'string',
        humidity: 0,
        pressure: 0,
        temp: 0
    }],
    error: 0
};

export default (state: I.StoreState = defaultState, action: T.AWeather): I.StoreState => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_WEATHER:
            const _data = 'data';
            const data = payload[_data];
            const { name, country } = data.city;

            const weathers: I.Weather[] = [];
            for (let i = 0; i < data.list.length; i = i + 3) {
                let item = data.list[i];
                let { dt_txt } = item;
                let schedule = dt_txt ? dt_txt.split(' ') : '';
                let { humidity, pressure, temp } = item.main;

                weathers.push({
                    date: schedule[0],
                    time: schedule[1],
                    humidity,
                    pressure,
                    temp
                });
            }

            return {
                city: { name, country },
                weathers,
                error: 0
            };
        case ERROR_NOT_FOUND:
            defaultState.error = 404;
            return defaultState;
        default:
            return state;
    }
};