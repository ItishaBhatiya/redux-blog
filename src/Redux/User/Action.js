
import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

export const createUser = (user) =>{
    console.log(user);
    
    return{
        type: SIGNUP,
        payload: user
    }
}

export const loginUser = (user) =>{
    return{
        type: LOGIN,
        payload: user
    }
}

export const logoutUser = () =>{
    return{
        type: LOGOUT,
    }
}