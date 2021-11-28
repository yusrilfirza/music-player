import { combineReducers } from '@reduxjs/toolkit';
import dashboard from '../pages/dashboard/reducer';
import user from '../components/elements/Modal/reducer';

const rootReducer = combineReducers({
    dashboard,
    user,
});

export default rootReducer;
