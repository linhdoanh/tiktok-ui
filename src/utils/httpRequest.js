import axios from 'axios';

// console.log(process.env.REACT_APP_BASEURL);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
