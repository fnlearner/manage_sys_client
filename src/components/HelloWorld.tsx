import React,{useState,useEffect} from 'react'

type a = number[] extends Array<infer v >?v:'n'
function useHello(){
    const [msg,setMsg] = useState('world')
    console.log(msg)
    return (
        <div>
            hello ,{msg}
        </div>
    )
}
export default React.memo(useHello)