import axios from 'axios'

const instance = axios.create({    
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: true
});

instance.interceptors.request.use(function (config) {
    // config.headers.authorization = `Bearer ${localStorage.getItem('UserToken')}`
    return config
}, function (error) {
    return Promise.reject(error)
})

export default instance; 
