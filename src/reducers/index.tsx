import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weather from './reducers_weather';

const rootReducer = combineReducers({
    form: formReducer,
    weather: weather
});

export default rootReducer;