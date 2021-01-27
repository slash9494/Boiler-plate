import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../modules';


type AuthProp = null | false | true;



function Auth(SpecificComponent:Function,option:AuthProp,adminRoute:AuthProp) {

    //null    =>  아무나 출입이 가능한 페이지
    //true    =>  로그인한 유저만 출입이 가능한 페이지
    //false   =>  로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props:any){
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch<any>(auth())
                .then((response: any)=>{
                    //로그인하지 않은 상태
                    if(!response.payload.isAuth){
                        if(option){
                            props.history.push('/login')
                        }
                    }   else{
                            //로그인 한 상태
                            if(adminRoute && !response.payload.isAdmin){
                                props.history.push('/')
                            }else{
                                if(option === false){
                                    props.history.push('/')
                                }
                            }
                        }
                    
            })
        },[])    

        return <SpecificComponent/>
    }

    return AuthenticationCheck
};

export default Auth;
