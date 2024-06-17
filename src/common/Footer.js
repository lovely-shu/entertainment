import React from 'react';
import styled from 'styled-components';
import { SlBriefcase } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Div = styled.div`
line-height: 2;
display: flex;
align-items:center;
justify-content:center;
width: 100vw;
padding: 50px 0;
margin: 0 auto;
background: rgba(0,0,0,0.9);
color: #fff;
/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    text-align:center;
    font-size:14px;
    img{
        margin:0 auto;
        width:150px;
    }
    #box{

        width:90vw;
        margin: 0 auto;
        display:flex;
        flex-direction:column;
        align-items: center;
      
    }
    #info{
        display: flex;
        align-items: center;
        flex-direction:column;
     
    }
    p{
        margin-right:20px;
    }
}
/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
   
    img{
        width:200px;
        margin-right: 50px;
    }
    #box{

        width:80vw;
        margin: 0 auto;
        display:flex;
        align-items: center;
      
    }
    #info{
        display: flex;
    }
    p{
        margin-right:20px;
    }
}


`
const Footer = () => {
const navi = useNavigate();
const auth = localStorage.getItem('id');

const onAdmin= ()=>{
    if(auth){
     alert('이미 관리자 로그인 되어있습니다.')
    }else{
        navi('/adminLogin')
    }
}
    return (
        <Div>
            <div id='box'>
                <div>
                    <img src='/img/we2.png' alt='logo' />
                </div>
               <div>
                    <p>
                            WE ENTERTAINMENT. 2F, 5-6, Seolleung-ro 127-gil, Gangnam-gu, Seoul, Korea
                            <p><strong>ADDRESS.</strong> 서울특별시 강남구 선릉로127길 5-6, 2층 2202호</p>
                    </p>
                    <div id='info'>
                        
                        <p><strong>Tel.</strong> 010-0000-0000 </p>
                        <p><strong>E-Mail.</strong> weentertainment24@gmail.com</p>
                    </div>
                        <p> Copyright ⓒ 2024 더블유이엔터테인먼트 All rights reserved. 
                            <div onClick={onAdmin}><SlBriefcase color='white' /></div> </p>
                    
                </div>
            </div>
        </Div>
    );
};

export default Footer;