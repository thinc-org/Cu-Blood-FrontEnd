import axios from 'axios'

axios.interceptors.request.use(function (config) {
    config.headers.authorization = `Bearer ${localStorage.getItem('UserToken')}`
    return config
}, function (error) {
    return Promise.reject(error)
})

const instance = axios.create({    
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance; 