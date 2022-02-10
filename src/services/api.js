import axios from 'axios';

export const key = '94825b7b117d3f5112a2fc52481b4107d23c7f83';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;

