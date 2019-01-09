import axios from 'axios'

axios.interceptors.request.use(function (config) {
    config.headers.authorization = `Bearer ${localStorage.getItem('UserToken')}`
    return config
}, function (error) {
    return Promise.reject(error)
})