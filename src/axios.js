import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cook-me-api.herokuapp.com'
});

export default instance;