import axiosInstance from './api';

// const setup = (store) => {
const setup = () => {
    axiosInstance.interceptors.request.use();
    axiosInstance.interceptors.response.use();
};

export default setup;
