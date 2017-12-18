// import * as types from './actions/types';

export interface Search {
    city: string,
    country: string
}

export interface Weather {
    date: string,
    time: string,
    humidity: number,
    pressure: number,
    temp: number
}

export interface City {
    name: string,
    country: string
}

export interface StoreState {
    city: City,
    weathers: Weather[],
    error: number
}


