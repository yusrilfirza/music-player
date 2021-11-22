import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListTrack from '../../components/partials/ListTrack';
import { getData } from './action';

export const PageDashboard = () => {
    const dispatch = useDispatch();
    const state = useSelector((reducer) => reducer.dashboard);

    useEffect(() => {
        dispatch(getData());
    }, []); //eslint-disable-line

    return (
        <>
            <ListTrack dataDashboard={state} />
            <h1>sjadakdskasndkjd</h1>
        </>
    );
};

export default PageDashboard;
