import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5000/api',
    headers: {authorization: 'Bearer ' + localStorage.getItem('token-conectando')},
    responseType: 'json',
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
      },

})

export default api;