import { combineReducers } from 'redux';

import currentCityReducer from './reducers/currentCity';
import loadingStatusReducer from './reducers/loadingStatus';



export default combineReducers({
    currentCity: currentCityReducer,
    loadingStatus: loadingStatusReducer
});
