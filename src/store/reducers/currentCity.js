import { CHANGE_CITY } from '../actions';
import { getCurrentCity } from '../initialState';

const initialState = getCurrentCity();


const currentCityReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CITY: {
            return action.payload;
        }

        default: return state;
    }
};

export default currentCityReducer;



