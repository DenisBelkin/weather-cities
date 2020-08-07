import React, {useMemo, useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { APIkey, mainUrl }from '../'
import SelectCity from '../../components/SelectCity';
import { mapStateToProps, mapDispatchToProps } from '../storeAccess';
import Loader from '../../components/Loader';
import WeatherTable from '../../components/WeatherTable';


const MainPage = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const geoCity = 'Odessa'; //todo: get city and tag by current geo position
    const countryTag = 'ua';

    useMemo(()=>{
        axios(`${mainUrl}weather?q=${geoCity},${countryTag}&appid=${APIkey}`)
            .then((response)=> {
                setData(response.data)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[]);
    return (
        <>
            <h3>Current city: {geoCity}</h3>
            {
                isLoading
                    ? <Loader/>
                    : <WeatherTable data={data}/>
            }
            <div>
                <SelectCity {...props}/>
            </div>
        </>
    )
};


const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

export default ConnectedComponent;

