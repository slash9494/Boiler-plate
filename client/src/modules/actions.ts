import axios from 'axios';
import {createAction} from 'typesafe-actions';

type LoginUserProps = {
    email:string;
    password:string;
}

export type RegisterUserProps = {
    email:string;
    password:string;
    name:string;
}



export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';
export const AUTH_USER = 'auth_user';

export function loginUser (dataToSubmit: LoginUserProps){
    const request = axios.post('/api/users/login',dataToSubmit)
        .then(response=>response.data)
    
    return {
        type:LOGIN_USER,
        payload:request
    }
}

export function registerUser (dataToSubmit:RegisterUserProps) {
    const request = axios.post('/api/users/register',dataToSubmit)
        .then(response=>response.data)

    return {
        type:REGISTER_USER,
        payload:request
    }
}

export function  auth(){
    const request = axios.get('/api/users/auth')
        .then(response => response.data)
    
    return{
        type:AUTH_USER,
        payload:request
    }
}