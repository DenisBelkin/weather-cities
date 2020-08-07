import React, {useMemo, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import find from 'lodash/find';
import axios from 'axios';
import Button from 'semantic-ui-react/dist/es/elements/Button';

import { APIkey, mainUrl }from '../'
import { mapStateToProps, mapDispatchToProps } from '../storeAccess';
import { countriesTags } from '../../store/initialState';
import Loader from '../../components/Loader';
import WeatherTable from '../../components/WeatherTable';


const CityPage = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const countryTag = find(countriesTags, (value, key) => props.currentCity === key);

    useMemo(()=>{
        axios(`${mainUrl}weather?q=${props.currentCity},${countryTag}&appid=${APIkey}`)
            .then((response)=> {
                setData(response.data)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[]);
  return (
      <>
          <Link to={'/'}>
            <Button content='Back' />
          </Link>

          {
            isLoading
                ? <Loader/>
                : <WeatherTable data={data}/>
          }
      </>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(CityPage);

