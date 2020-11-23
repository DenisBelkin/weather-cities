import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import history from './history';
import MainPage from './MainPage';
import CityPage from './CityPage';


export const APIkey = '5ce18c55f97b60ff571795ec32faba7c';
export const mainUrl = 'http://api.openweathermap.org/data/2.5/'

const AppRouter = (props) => {

  return (

      <Router history={history}>
              <Route path={'/'} exact component={MainPage}/>
              <Route path={'/:cityName'} component={CityPage}/>
      </Router>

  )
};

export default AppRouter;
