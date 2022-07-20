import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://62d530eb15ad24cbf2c13cea.mockapi.io/api',
    timeout: 5000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default instance;
