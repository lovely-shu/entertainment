import React from 'react';
import styled from 'styled-components';
import jojic from '../img/jojic.jpg'
const Div = styled.div`
margin:0 auto;
width:100vw;
#box{
    width:70vw;
    margin:0 auto;
}
/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    h1{
        font-size:30px;
        font-weight:bold;
        text-align:left;
      }
      #jojic{
        width:100%;
        margin:0 auto;
     }
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
  h1{
    font-size:70px;
    font-weight:bold;
    text-align:left;
  }
 #jojic{
    width:50vw;
    margin:0 auto;
    display:flex;

 }

}
`
const Organization = () => {
    return (
        <Div>
            <div id='box'>
            <h1>ORGANIZATION</h1>
            </div>
            <img id='jojic' alt="조직도" src={jojic}></img>
  
        </Div>
    );
};

export default Organization;