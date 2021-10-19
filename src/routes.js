/* eslint-disable max-len */
import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter, Route, withRouter, Redirect,
} from 'react-router-dom';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';
import { AUTH_KEY, getCookie } from './helpers/cookie';
import store from './services/store';

import { LayoutBase } from './components/layouts/base';
import { LayoutModal } from './components/layouts/modal';

import { PageDashboard } from './pages/dashboard';
import { PageLogin } from './pages/login';

const routes = [
    {
        path: '/dashboard',
        component: PageDashboard,
        title: 'Dashboard',
    },
    {
        path: '/search',
        component: PageDashboard,
        title: 'Search',
    },
];

export const AppRoute = () => {
    const isLoggedIn = () => {
        const authCookie = getCookie(AUTH_KEY, `${process.env.REACT_APP_PROJECT}_isLoggedIn`);
        if (!authCookie) return false;
        return true;
    };

    const renderRootPath = () => {
        const isLogin = isLoggedIn();
        return <Redirect to={!isLogin ? '/login' : '/dashboard'} />;
    };

    const renderLoginPage = (Comp, props) => {
        // const isLogin = isLoggedIn();
        const loginLayout = (
            <LayoutBase sidebarStatus={false} {...props}>
                <Comp {...props} />
            </LayoutBase>
        );
        // document.title = `${PROJECT_TITLE} | Login`;
        // return !isLogin ? <Comp {...props} /> : <Redirect to={HOME_PAGE_ROUTE_PATH} />;
        return loginLayout;
    };

    const PrivateRoute = ({ component: Comp, title, ...rest }) => {
        const render = (props) => {
            const isLogin = isLoggedIn();
            return isLogin ? (
                <LayoutBase sidebarStatus {...props}>
                    <Comp {...props} />
                </LayoutBase>
            ) : (
                <LayoutBase sidebarStatus {...props}>
                    <Comp {...props} />
                </LayoutBase>
                // <Redirect to="/login" />
            );
        };
        document.title = `Musicplay | ${title}`;
        return <Route {...rest} render={render} />;
    };

    const pageRoutes = routes
        .filter((route) => !route.is_modal)
        .map((route) => (
            <PrivateRoute
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
                has_access={route.has_access}
                title={route.title}
            />
        ));

    const modalRoutes = routes
        .filter((route) => route.is_modal)
        .map((route) => (
            <ModalRoute
                key={route.path}
                path={route.path}
                defaultParentPath={route.defaultParentPath || '/'}
                component={route.component}
            />
        ));

    const renderModal = ({ open, redirectToBack, ...rest }) => (
        <LayoutModal open={open} onExited={redirectToBack} {...rest}>
            {modalRoutes}
        </LayoutModal>
    );

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ModalSwitch renderModal={renderModal}>
                    <Route exact path="/" render={() => renderRootPath()} />
                    <Route path="/login" render={(props) => renderLoginPage(PageLogin, props)} />
                    {pageRoutes}
                    {modalRoutes}
                    {/* <Route component={PageNotFound} /> */}
                </ModalSwitch>
            </BrowserRouter>
        </Provider>
    );
};

export default withRouter(AppRoute);
