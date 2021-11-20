import { Home } from '../../services/api/home';
import { DashboardReducer } from './reducer';

export const getData = () => async (dispatch) => {
    dispatch(DashboardReducer.actions.setLoading(true));
    Home.get()
        .then((response) => {
            dispatch(DashboardReducer.actions.setData(response.data.data));
        })
        .catch(() => {
            dispatch(DashboardReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(DashboardReducer.actions.setLoading(false));
        });
};

export const reset = () => async (dispatch) => {
    dispatch(DashboardReducer.actions.reset());
};

export default { getData, reset };
