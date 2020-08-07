import history from '../roots/history';


export const getCurrentCity = () => {
    const pathname = history.location.pathname;
    return pathname ? pathname.slice(1) : ''
};
export const loadingStatus = false;
export const countriesTags = { London: 'uk', Odessa: 'ua', Kiev: 'ua', Minsk: 'by' };

const storeInitialState = { currentCity: getCurrentCity() };

export default storeInitialState;
