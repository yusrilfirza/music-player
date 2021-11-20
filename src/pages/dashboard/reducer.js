import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    items: {},
};

export const DashboardReducer = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setError: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setData: (state, action) => ({ ...state, items: action.payload }),
        reset: () => initialState,
    },
});

export default DashboardReducer.reducer;
