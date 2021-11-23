import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListTrack from '../../components/partials/ListTrack';
import { getData } from './action';

export const PageDashboard = () => {
    const dispatch = useDispatch();
    const state = useSelector((reducer) => reducer.dashboard);
    const [dataTrack, setDataTrack] = useState({});

    useEffect(() => {
        dispatch(getData());
    }, []); //eslint-disable-line

    useEffect(() => {
        setDataTrack(state.items);
    }, [state]);

    const renderListTrack = () => Object.keys(dataTrack).map((el) => (
        <ListTrack key={el} dataGenre={el} genreItem={dataTrack[el]} />
    ));

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    });

    return (
        <>
            {
                Object.keys(dataTrack).length > 0 ? renderListTrack() : ''
            }
            <div className="mt-36" />
        </>
    );
};

export default PageDashboard;
