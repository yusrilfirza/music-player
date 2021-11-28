import { Home } from '../../../services/api/home';
import { UserReducer } from './reducer';

export const postRegisterData = (body, history) => async (dispatch) => {
    dispatch(UserReducer.actions.setLoading(true));
    Home.postRegister(body)
        .then((resp) => {
            console.log(resp);
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => {
            dispatch(UserReducer.actions.setLoading(false));
            history.push('/login');
        });
};

export const reset = () => async (dispatch) => {
    dispatch(UserReducer.actions.reset());
};

export default { postRegisterData, reset };
