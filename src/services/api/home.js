import { get } from '../../helpers/api';

export const Home = {
    get: () => get('/home'),
};

export default Home;
