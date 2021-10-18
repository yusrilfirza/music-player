import React from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LayoutHeader = (props) => {
    const { loginStatus } = props;

    const renderHeaderItem = () => {
        let headerItem = (
            <div className="pl-20 flex justify-between w-full">
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
            </div>
        );
        if (!loginStatus) {
            headerItem = (
                <div className="flex w-9/12 mx-auto justify-between">
                    <img alt="musicplay_logo" src={`${process.env.PUBLIC_URL}/assets/img/logo_musicplay.png`} />
                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="bg-main-bold_gray-half text-white font-semibold rounded-full px-5 py-2 border-2 border-main-dark_green-half">Sign up</button>
                        <button type="button" className="bg-main-dark_green-half text-white font-semibold rounded-full px-5 py-2">Log in</button>
                    </div>
                </div>
            );
        }
        return headerItem;
    };

    return (
        <header className={`py-8 bg-main-bold_gray-half flex ${!loginStatus ? 'border-b border-main-dark_green-half' : ''}`}>
            {renderHeaderItem()}
        </header>
    );
};

export default LayoutHeader;
