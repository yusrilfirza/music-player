import { combineReducers } from '@reduxjs/toolkit';
import dashboard from '../pages/dashboard/reducer';

const rootReducer = combineReducers({
    dashboard,
});

export default rootReducer;
