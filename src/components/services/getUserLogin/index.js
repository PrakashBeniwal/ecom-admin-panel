import {  NotificationManager } from "react-notifications"
import { apis } from "../../../config"
import api from "../../ApiConfig"
import { eraseCookie, setCookie } from "../../../function"

const getUserLogin=async(data)=>{
    
    try {
        const result=await api.post(apis.GetUserLogin,data,{
            withCredentials:true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
        })

        if (result.data.error) {
            NotificationManager.error(result.data.error)
        } else {
            return result.data
        }
        
    } catch (error) {
      console.log(error)  
      return null
    }


}

const authenticate=(data,next)=>{

    setCookie('token',data.token,30)
    setCookie('role',data.role,30)
    next();
}


const logout=()=>{

    eraseCookie('token')
    eraseCookie('role')
    window.location.reload()
}


const registerUser=async(data)=>{
    let result = await api.post(apis.GetUserRegister,data)

    if (result) {
        return result
    }
    return null
}

export default {
    getUserLogin,
    authenticate,
    registerUser,
    logout
}