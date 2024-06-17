import React from 'react';
import KakaoMap from '../components/KakaoMap';
import styled from 'styled-components';

const Div = styled.div`
/* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {
    width:70vw;
    margin:0 auto;
 
h1{
    margin:0 auto;
    font-size:30px;
    font-weight:bold;
    margin-bottom:50px;
   
  }
    #info{
        margin-bottom:30px;
        p{
            font-size:16px;
            line-height:2;
        }
        strong{
            font-size: 20px;
            margin-right:10px;
        }
    }
}
/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
    width:70vw;
    margin:0 auto;
    h1{
        margin:50px auto;
        width:70vw;
        font-size:70px;
        font-weight:bold;
      }
    #info{
        margin-bottom:30px;
        p{
            font-size:20px;
            line-height:2;
        }
        strong{
            font-size: 25px;
            margin-right:10px;
        }
    }
}

`
const Contact = () => {

    return (
        <Div>
            <h1>CONTACT US</h1>
            <div id='info'>
                <p><strong>Tel.</strong><br/> 010-0000-0000</p>
                <p><strong>E-Mail.</strong><br/> weentertainment@gmail.com</p>
                <p><strong>Address.</strong><br/> 서울특별시 강남구 강남대로162길 21</p>
            </div>
            <KakaoMap/>
            
        </Div>
    );
};

export default Contact;