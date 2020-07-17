
import axios from "../axios.config";

export const login=(param:{
    username:string,
    password:string
})=>{
    // console.log(axios)
    // const to = JSON.stringify(param)
    return axios.get('/users')
}