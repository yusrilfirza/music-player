import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import {
    faPlay, faBackward, faForward, faRetweet, faRandom, faVolumeUp, faHeart, faEllipsisV, faPause,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useKeypress from 'react-use-keypress';

import BrandIcon from '../../elements/IconText';
import Button from '../../elements/Button';

export const LayoutFooter = () => {
    const location = useLocation();
    const { pathname } = location;
    const [isPlay, setIsPlay] = useState(false);
    const [audioContainer, setAudioContainer] = useState({});

    const myContainer = useRef(null);

    useEffect(() => {
        setAudioContainer({ auidoEle: myContainer.current });
    }, []);

    const audio = audioContainer.auidoEle;

    // eslint-disable-next-line no-shadow
    const playSong = (audio) => {
        audio.classList.add('play');

        audio.play();
    };

    // eslint-disable-next-line no-shadow
    const pauseSong = (audio) => {
        audio.classList.remove('play');

        audio.pause();
    };

    const setProgress = (e) => {
        const { clientWidth } = e.currentTarget;
        const { offsetX } = e.nativeEvent;
        const { duration } = audio;

        audio.currentTime = (offsetX / clientWidth) * duration;
    };

    const updateProgress = (e) => {
        const progress = document.getElementById('progress');
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    };

    const loadSong = () => {
        setIsPlay(!isPlay);
        const isPlaying = audio.classList.contains('play');

        if (isPlaying) {
            pauseSong(audio);
        } else {
            playSong(audio);
        }
    };

    useKeypress(' ', () => {
        if (pathname !== '/login') {
            loadSong();
        }
    });

    const renderFooterItem = () => {
        let footerItem = (
            <div className="w-9/12 mx-auto py-12 text-gray-400">
                <div className="grid grid-cols-4">
                    <div>
                        <BrandIcon />
                        <p className="brand-taglin pt-2">
                            We keep on track and take
                            <br />
                            care about what you like
                        </p>
                    </div>
                    <div>
                        <h6 className="font-semibold text-lg pb-6" style={{ color: '#06CDC1' }}>For Beginners</h6>
                        <ul>
                            <li>
                                <Button type="link" to="#">New Account</Button>
                            </li>
                            <li className="py-2">
                                <Button type="link" to="#">Start listening</Button>
                            </li>
                            <li>
                                <Button type="link" to="#">Disciver song</Button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-lg pb-6" style={{ color: '#06CDC1' }}>Explore Us</h6>
                        <ul>
                            <li>
                                <Button type="link" to="#">Our Careers</Button>
                            </li>
                            <li className="py-2">
                                <Button type="link" to="#">Privacy</Button>
                            </li>
                            <li>
                                <Button type="link" to="#">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-lg pb-6" style={{ color: '#06CDC1' }}>Connect Us</h6>
                        <ul>
                            <li>
                                <Button type="link" to="#">support@musicplay.id</Button>
                            </li>
                            <li className="py-2">
                                <Button type="link" to="#">0821-22129-8288</Button>
                            </li>
                            <li>
                                <Button type="link" to="#">Musicplay, Kemang, Jakarta</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex pt-12">
                    <div className="flex-1 text-center items-center justify-center">
                        Copyright 2021 • All rights reserved • |MUSICPLAY
                    </div>
                </div>
            </div>
        );
        if (pathname !== '/login') {
            footerItem = (
                <div className="w-7/12 mx-auto py-4 text-gray-400">
                    <div className="flex">
                        <div className="flex pr-5">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`} className="h-12 mr-2 rounded-xl" alt="" />
                            <div className="grid grid-rows-2 my-auto ">
                                <p className="text-white font-semibold text-sm">I Need a Girl</p>
                                <p className="text-gray-400 text-xs">elijah who</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faBackward} className="text-white my-auto mr-5" size="sm" />
                        <FontAwesomeIcon icon={isPlay ? faPause : faPlay} onClick={loadSong} className="text-white my-auto mr-5" size="lg" />
                        <FontAwesomeIcon icon={faForward} className="text-white my-auto mr-5" size="sm" />
                        <FontAwesomeIcon icon={faRetweet} className=" my-auto text-gray-400 mr-5" size="xs" />
                        <FontAwesomeIcon icon={faRandom} className=" my-auto text-gray-400 mr-5" size="xs" />
                        <div className="flex my-auto text-white col-span-8 flex-grow mr-11">
                            <div className="timePassed">
                                <span className="text-sm">0:18</span>
                            </div>
                            <div className="progress-container my-auto mx-2" id="progress-container" onClick={setProgress} aria-hidden="true">
                                <div className="progress" id="progress" />
                            </div>
                            <div className="timeDuration">
                                <span className="text-sm">3:18</span>
                            </div>
                        </div>
                        <audio ref={myContainer} src={`${process.env.PUBLIC_URL}/assets/img/Reality Club - Is It The Answer-Instrumentals.mp3`} onTimeUpdate={updateProgress} className="" id="audio"><track kind="captions" /></audio>
                        <FontAwesomeIcon icon={faVolumeUp} className=" my-auto text-white" size="sm" />
                        <FontAwesomeIcon icon={faHeart} className="mx-5 my-auto text-white" size="sm" />
                        <FontAwesomeIcon icon={faEllipsisV} className=" my-auto text-white" size="sm" />
                    </div>
                </div>
            );
        }
        return footerItem;
    };

    return (
        <footer className={`w-screen border-t border-main-dark_green-half bg-main-bold_gray-half ${
            pathname !== '/login' ? 'fixed bottom-0' : ''
        }`}
        >
            {renderFooterItem()}
        </footer>
    );
};

export default LayoutFooter;
