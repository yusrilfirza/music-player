import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    faChevronRight,
    faChevronLeft,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropdownProfile } from '../../partials/dropdown/profile';
import BrandIcon from '../../elements/IconText';
import ModalLogin from '../../elements/Modal';

export const LayoutHeader = (props) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [btnHead, setBtnHead] = useState();

    const { loginStatus } = props;

    const onClickProfile = () => {
        setIsOpen(!isOpen);
    };

    function changeModalOpenSign() {
        setModalOpen(true);
        setBtnHead('signup');
    }

    function changeModalOpenLogin() {
        setModalOpen(true);
        setBtnHead('login');
    }

    const renderSearchbar = () => {
        const { pathname } = history.location;
        let searchButton = (
            <Link
                to="/search"
                className="bg-white rounded-full h-auto px-3 py-1"
            >
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-main-bold_gray-lite text-sm"
                />
            </Link>
        );
        if (pathname === '/search') {
            searchButton = (
                <button
                    type="button"
                    className="bg-white rounded-full h-auto px-3 ml-3 py-1"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-main-bold_gray-lite text-sm"
                    />
                </button>
            );
        }

        return (
            <div
                className={`rounded-full bg-white flex ${
                    pathname === '/search' ? 'pl-8' : ''
                } mr-8`}
            >
                <input
                    className={`${
                        pathname === '/search' ? 'w-full' : 'w-0'
                    } transition-width focus:outline-none`}
                    placeholder="Search"
                />
                {searchButton}
            </div>
        );
    };

    const renderHeaderItem = () => {
        let headerItem = (
            <div className="pl-20 pr-10 flex justify-between w-full">
                <div className="flex">
                    <BrandIcon />
                    <div className="grid grid-cols-2 gap-8 ml-8">
                        <button type="button">
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="text-white"
                            />
                        </button>
                        <button type="button">
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="text-white"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    {renderSearchbar()}
                    <DropdownProfile open={isOpen} onClick={onClickProfile} />
                </div>
            </div>
        );
        if (!loginStatus) {
            headerItem = (
                <div className="flex w-9/12 mx-auto justify-between">
                    <BrandIcon />
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="bg-main-bold_gray-half text-white font-semibold rounded-full px-5 py-2 border-2 border-main-dark_green-half"
                            onClick={changeModalOpenSign}
                        >
                            Sign up
                        </button>
                        <button
                            type="button"
                            className="bg-main-dark_green-half text-white font-semibold rounded-full px-5 py-2"
                            onClick={changeModalOpenLogin}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            );
        }
        return headerItem;
    };

    return (
        <>
            <header
                className={`py-5 bg-main-bold_gray-half flex ${
                    !loginStatus
                        ? 'border-b border-main-dark_green-half'
                        : 'w-full mr-72'
                }`}
            >
                {renderHeaderItem()}
            </header>
            <ModalLogin
                iniOpen={modalOpen}
                gantiOpen={setModalOpen}
                whichBtn={btnHead}
            />
        </>
    );
};

export default LayoutHeader;
