import { CHANGE_CITY } from '../../store/actions';

export const mapStateToProps = state => ({
    currentCity: state.currentCity
});

export const mapDispatchToProps = dispatch => ({
    changeCurrentCity: payload =>  dispatch({
        type: CHANGE_CITY,
        payload
    })
});
