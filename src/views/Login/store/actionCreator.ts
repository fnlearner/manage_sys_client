
import { CHANGE_ENTER_LOADING,IS_LOGIN} from './constants';
import { login } from '../../../api/login';
// import { fromJS } from 'immutable';
export const getLoginStatus=(data:boolean)=>({
    type:IS_LOGIN,
    data
})

export const changeEnterLoading =(data:boolean)=>({
    type:CHANGE_ENTER_LOADING,
    data
})

interface DispatchType{
    type:string,
    data:any
}
export const submitLogin =(param:{
    username:string,
    password:string
})=>{
    return (dispatch:React.Dispatch<DispatchType>)=>{
        login(param).then((res:any)=>{
            dispatch(getLoginStatus(true))
        }).catch((err:any)=>{
            console.log(`error:${err}`)
        })
    }
}