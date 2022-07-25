import {  SIGNUP_LOADING } from "./ActionType"
import { SIGNUP_SUCCESS } from "./ActionType"
import { SIGNUP_ERROR } from "./ActionType"

import { Login_LOADING } from "./ActionType"
import { Login_SUCCESS } from "./ActionType"
import { Login_ERROR } from "./ActionType"


import axios from "axios"
export const signupLoading=()=>{
    return{
        type:SIGNUP_LOADING
    }
}

export const signupSuccess=()=>{
    return{
        type:SIGNUP_SUCCESS
    }
}

export const signupError=()=>{
    return{
        type:SIGNUP_ERROR
    }
}

export const LoginLoading=()=>{
    return{
        type:Login_LOADING
    }
}

export const LoginSuccess=(payload)=>{
    return{
        type:Login_SUCCESS,
        payload
        
    }
}

export const LoginError=()=>{
    return{
        type:Login_ERROR
    }
}

//    export  const signupReq=(signupData)=>(dispatch)=>{
 
//   }

//   export const logout=()=>{
//     return{
//         type:Logout
//     }
// }



