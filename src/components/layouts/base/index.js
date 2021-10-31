import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';
// import { AUTH_KEY, getCookie } from 'helpers/cookie';
// import { useInterval } from 'helpers/custom-hooks';
// import { clearNotification, setSessionExpired } from './action';
import { LayoutHeader } from '../header';
import { LayoutSidebar } from '../sidebar';
import { LayoutFooter } from '../footer';

export const LayoutBase = (props) => {
    // const dispatch = useDispatch();
    const state = useSelector((rootState) => rootState.base);
    const { sidebarStatus } = props;

    // eslint-disable-next-line no-unused-vars
    const showNotification = () => {
        const { status } = state.notification_content;
        let statusIcon = faCheckCircle;
        let statusClass = 'text-support-green';
        if (status === 'error') {
            statusIcon = faTimesCircle;
            statusClass = 'text-support-red';
        }

        const options = {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            type: status,
            closeOnClick: true,
        };

        const bodyMessage = (
            <div className="flex">
                <div className={`text-3xl mr-4 ${statusClass}`}>
                    <FontAwesomeIcon icon={statusIcon} />
                </div>
                <div>
                    <div className="text-black_blue font-semibold">{state.notification_content.title}</div>
                    <div className="text-black_blue-60 text-base">{state.notification_content.message}</div>
                </div>
            </div>
        );

        toast(bodyMessage, options);
    };

    const renderLayout = () => {
        let layoutBody = (
            <div className="flex">
                <LayoutHeader loginStatus />
                <LayoutSidebar />
            </div>
        );
        if (!sidebarStatus) {
            layoutBody = (
                <LayoutHeader loginStatus={false} />
            );
        }
        return layoutBody;
    };
    // useEffect(() => {
    //     if (state.is_notification_show) {
    //         toast.dismiss();
    //         showNotification();
    //         // dispatch(clearNotification());
    //     }
    //     return () => {
    //         // dispatch(setSessionExpired(false));
    //     };
    // }, [state.is_notification_show]); // eslint-disable-line react-hooks/exhaustive-deps

    // const checkToken = () => {
    //     const timeout = getCookie(AUTH_KEY, `${process.env.REACT_APP_PROJECT}_timeOut`);
    //     const now = moment().unix();
    //     if (now >= timeout) dispatch(refreshToken());
    // };

    // useEffect(() => {
    //     checkToken();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // useInterval(() => {
    //     checkToken();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, 5000);

    const { children } = props;
    return (
        <div className="app font-sans antialiased">
            <ToastContainer />
            {renderLayout()}
            <div className="app-body">
                <main className={`${!sidebarStatus ? 'w-9/12 mx-auto' : 'pl-20 md:mr-72 px-20'} main text-white min-h-body relative`}>
                    {/* <LayoutBreadcrumb {...props} /> */}
                    {children}
                </main>
            </div>
            <LayoutFooter />
            {/* <PartialSessionExpired open={state.is_session_expired} /> */}
        </div>
    );
};

export default LayoutBase;
