import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListTrack from '../../components/partials/ListTrack';
import { getData } from './action';

export const PageDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []); //eslint-disable-line

    return (
        <>
            <ListTrack />
            <h1>sjadakdskasndkjd</h1>
        </>
    );
};

export default PageDashboard;
