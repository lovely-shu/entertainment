import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Div = styled.div`
margin: 300px auto;
width: 400px;
`

const AdminLoginPage = () => {
const navi = useNavigate();
    const onLogin = (e)=>{
        e.preventDefault();
        if(e.target.id.value === "admin" && e.target.pw.value ==="1111"){
            navi('/')
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('id', "admin");
        }else{
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
        }
      

    }
    return (
        <Div>
            <form onSubmit={onLogin}>
            관리자 로그인<br/>
            아이디 :<input name='id'></input><br/>
            비밀번호 :<input name='pw'></input><br/>
            <button>로그인</button>
            </form>
        </Div>
    );
};

export default AdminLoginPage;