import { START_LOADING, END_LOADING } from '../actions';

const initialState = true;


const loadingStatusReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOADING: {
            return true;
        }
        case END_LOADING: {
            return false;
        }

        default: return state;
    }
};

export default loadingStatusReducer;



