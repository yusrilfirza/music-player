import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    items: {},
};

export const UserReducer = createSlice({
    name: 'user',
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

export default UserReducer.reducer;
