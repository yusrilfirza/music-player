import React from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LayoutHeader = () => (
    <header className="pl-20 py-8 bg-main-bold_gray-half flex justify-between">
        <div className="flex">
            <img alt="musicplay_logo" src={`${process.env.PUBLIC_URL}/assets/img/logo_musicplay.png`} />
            <div className="grid grid-cols-2 gap-8 ml-8">
                <button type="button">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                </button>
                <button type="button">
                    <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                </button>
            </div>
        </div>
    </header>
);

export default LayoutHeader;
