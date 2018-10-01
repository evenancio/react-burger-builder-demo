import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-demo-9754b.firebaseio.com/'
});

export default instance;