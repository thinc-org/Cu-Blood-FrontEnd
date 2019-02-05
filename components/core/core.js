import axios from 'axios'

const instance = axios.create({    
    baseURL: 'http://localhost:3000/v0',
    withCredentials: true,
});

instance.interceptors.request.use(function (config) {
    // config.headers.authorization = `Bearer ${localStorage.getItem('UserToken')}`
    return config
}, function (error) {
    return Promise.reject(error)
})

export default instance; 
