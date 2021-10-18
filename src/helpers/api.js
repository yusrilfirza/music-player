/* eslint-disable no-param-reassign */
import axios from 'axios';
import store from '../services/store';
import { BaseReducer } from '../components/layouts/base/reducer';
import { AUTH_KEY, getCookie } from './cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;

const apiClient = axios.create({
    baseURL: BASE_URL,
});

export const interceptorRequestConfig = (config) => {
    const token = getCookie(AUTH_KEY, `${process.env.REACT_APP_PROJECT}_accessToken`);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

export const interceptorRequestCallback = (error) => Promise.reject(error);

export const interceptorResponseData = (response) => response;
export const interceptorResponseCallback = async (error) => {
    if (error.response.status === 401 && error.response.config.url !== '/login') {
        store.dispatch(BaseReducer.actions.setSessionExpired(true));
    }
    return Promise.reject(error.response);
};

apiClient.interceptors.request.use(interceptorRequestConfig, interceptorRequestCallback);
apiClient.interceptors.response.use(interceptorResponseData, interceptorResponseCallback);

const {
    get, post, put, delete: destroy,
} = apiClient;
export {
    get, post, put, destroy,
};
