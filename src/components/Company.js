import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../App.css'

const Div = styled.div`
margin:0 auto;
width:70vw;

h1, h2{
    margin-top:50px;
}

/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    h1{
        font-size:30px;
        font-weight:bold;
      }
      h2{
        font-size:25px;
        font-weight: normal;
      }
      #info{
        margin-top:20px;
        line-height:1.5;
        font-size:16px;
      }
      text-align:left;
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
  h1{
    font-size:70px;
    font-weight:bold;
  }
  h2{
    font-size:35px;
    font-weight: normal;
  }
  #info{
    margin-top:20px;
    line-height:1.5;
    font-size:20px;
  }
  text-align:left;
}
`
const Company = () => {



    return (
        <Div>
            <div id='company'>
            <h1>INTRODUCTION</h1>
            <h2 className="fade-in">더블유이엔터테인먼트는</h2>
            <div id='info'>
다년간의 현장 경험을 지닌 각 분야 전문가가 함께 설립한 배우 전문 매니지먼트로,<br/>
소속 아티스트와의 깊은 소통을 가장 중요시합니다.<br/>
배우 매니지먼트와 에이전트 그리고 신인 아티스트 개발을 통한 창의적인 연예 활동으로<br/>
대한민국을 대표하는 매니지먼트로 앞장서 나가겠습니다.<br/><br/><br/>
 
더블유이엔터테인먼트는 문화 콘텐츠 사업의 트렌드를 이끌어나가며 함께하는 아티스트와 서로 상생하며<br/>
성장통을 극복해 나가는 페이스메이커가 될 것임을 약속합니다.<br/>
앞으로 매니지먼트 사업 확대와 공연 및 미디어 콘텐츠 제작, 스타 마케팅 등의 비즈니스 확장을 통해 <br/>
단단한 엔터테인먼트 기업으로 거듭날 것입니다.<br/><br/><br/>
 
더블유이엔터테인먼트는 아티스트의 창조적 욕구와 경험을 존중합니다.<br/>
‘원하고(Want) 경험하라(Experience)’는 이념으로 소속 배우의 꿈을 함께 만들어 나가겠습니다.<br/>

            </div>
            </div>
        </Div>
    );
};

export default Company;