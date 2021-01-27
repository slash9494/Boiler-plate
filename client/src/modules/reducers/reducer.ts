import {State,Action} from '../types';
import {createReducer} from 'typesafe-actions';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from '../actions';


export const initialState:State = []

const userReducer = createReducer<State,Action>(initialState,{
    [LOGIN_USER] : (state,action) =>({
        ...state,
        loginSuccess:action.payload
    }),
    [REGISTER_USER] : (state,action) => ({
        ...state,
        register:action.payload
    }),
    [AUTH_USER] : (state,action) => ({
        ...state,
        userData:action.payload
    })
    
})

export default userReducer