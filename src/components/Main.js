import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Div = styled.div`
animation: ${fadeIn} 1.5s ease-in-out;

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
    #logo-img{
        margin:0 auto;
        width:300px;
        padding-right:30px;
    }
#logo{
   
    margin-bottom:20px;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
#we{
font-size:30px;
margin:30px auto;
}
#info {
    text-align:center;
    line-height:2;
}
}

/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    #logo-img{
        margin:0 auto;
        width:200px;
     
    }
   #info{
    width:85vw;
    text-align:center;
    margin:0 auto;

   }
   #logo{
    opacity:0.9;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
}

#we{
font-size:25px;
margin-top:70px;
margin-bottom:30px;
}
#info {
    text-align:center;
    line-height:2;
}
}

`

const Main = () => {
    return (
        <Div>
            <div id='logo'>
              
                <div id='we'>
                <img id='logo-img' src='/img/we.png' alt='logo'/>
                </div>
            </div> 
                <div id='info'>
                    더블유이엔터테인먼트는 아티스트의 창조적 욕구와 경험을 존중합니다.<br/>
                    '원하고(Want) 경험하라(Experience)'는 이념으로<br/>
                    소속 배우의 꿈을 함께 만들어 나가겠습니다.
           </div>
        </Div>
    );
};

export default Main;