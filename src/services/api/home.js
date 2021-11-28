import { get, post } from '../../helpers/api';

export const Home = {
    get: () => get('/home'),

    postRegister: (body) => post('/users', body),
};

export default Home;
