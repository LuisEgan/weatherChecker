import * as types from './actions/types';

export type AWeather = {
    type: types.FETCH_WEATHER,
    payload: {
        [index: string]: {
            data: {
                [index: string]: {
                    city: string,
                    country: string
                }
            }
        }
    }
} | {
    type: types.ERROR_NOT_FOUND,
    payload: number
}