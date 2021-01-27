import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
 
export type Action = ActionType <typeof actions>;


export interface UserInfo {
    name:{
		type:String,
	},
	email:{
		type:String,
		trim:boolean,
		unique:number
	},
	password:{
		type:String,
	},
	lastname:{
		type:String,
	},
	role:{
		type:Number,
		default?:number
	},
	image:String,
	token:{
		type:String
	},
	tokenExp:{
		type:Number
	},
}


export type State = UserInfo[];