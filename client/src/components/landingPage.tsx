import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function LandingPage (props:any) {
    const onClick = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if(response.data.success){
                    props.history.push('/login')
                } else{
                    alert('로그아웃 하는데 실패했습니다.')
                }
            })
    }

    return (
        <div>
            메인
            <button onClick={onClick}>로그아웃</button>
        </div>
    );
}

export default withRouter(LandingPage);