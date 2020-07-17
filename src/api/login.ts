
import axios from "../axios.config";

export const login=(param:{
    username:string,
    password:string
})=>{
    return axios.get('/users')
}