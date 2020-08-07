import React from 'react';
import { Select } from 'semantic-ui-react';

const options = [
        {
            value: '/Odessa',
            text: 'Odessa'
        },
        {
            value: '/Kiev',
            text: 'Kiev'
        },
        {
            value:  '/London',
            text: 'London'
        },
        {
            value: '/Minsk',
            text: 'Minsk'
        },
    ]
;


const SelectCity = ({ history, changeCurrentCity }) => (
            <Select onChange={(e, data) => {
                const currentCity = data.value;
                changeCurrentCity(currentCity);
                history.push({ pathname: currentCity } );
            }} placeholder='Select your city' options={options}/>
    );


export default SelectCity;
