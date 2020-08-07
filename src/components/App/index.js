import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../../store';
import storeInitialState from '../../store/initialState';


import AppRouter from '../../roots';


const App = () => {
    const store = createStore(rootReducer, storeInitialState );


    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    )
};

export default App;
