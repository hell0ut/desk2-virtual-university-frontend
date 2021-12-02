import axios from "axios";

export const base_url = 'http://127.0.0.1:8000/api/'

const $api = axios.create({
    baseURL:base_url
})


$api.interceptors.request.use((config)=>{
    config.headers.Authorization = 'Bearer ' +(localStorage.getItem('access')||'')
    return config;
})


// $api.interceptors.response.use((config)=>{
//     return config;
// }, async (error)=>{
//     const originalRequest = error.config;
//     if(error.response.status === 401 && error.config && !error.config._isRetry){
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(base_url + 'auth/token/refresh/', );
//             localStorage.setItem('token', response.data.access);
//             return $api.request(originalRequest);
//         }
//         catch (e){
//             console.log('YOU ARE NOT AUTHORIZED');
//         }
//     }
// })

export default $api;
