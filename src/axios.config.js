import axios from 'axios'

const baseUrl = 'http://127.0.0.1:5000/'
const instacne = axios.create({
    baseURL:baseUrl,
    timeout:5000,
    // withCredentials: true,
    headers:{
        "Content-Type":'application/json;charset=utf-8'   
    }
})

export default instacne