import React from 'react';
import { useLocation } from 'react-router';

import BrandIcon from '../../elements/IconText';
import Button from '../../elements/Button';

export const LayoutFooter = () => {
    const location = useLocation();
    const { pathname } = location;

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
                <div className="w-9/12 mx-auto py-12 text-gray-400">
                    <BrandIcon />
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
