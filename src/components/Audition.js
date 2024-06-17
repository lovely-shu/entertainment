import React from 'react';
import styled from 'styled-components';
import '../App.css'
import { TfiPencilAlt } from "react-icons/tfi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdDisplaySettings } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TiChevronRightOutline } from "react-icons/ti";
const Div = styled.div`
/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    #audition-apply{
        display:flex;
        width: 100vw;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }
    .apply-box{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-between;
        height: 50px;
        font-size: 12px;
        text-align:center;
    }
    h1{
        margin:50px auto;
        width:70vw;
        font-size:30px;
        font-weight:bold;
      }
      h2{
        margin:50px auto;
        width:70vw;
        font-size:20px;
        font-weight: normal;
      }
      .info{
        margin:0 auto;
        width:70vw;
        margin-top:20px;
        line-height:1.5;
        font-size:16px;
      }
      text-align:left;
    
      #back{
        text-align:center;
        background-image: url('/img/audi.JPG');
        background-size: cover;
        width:100vw;
        height:350px;
        font-size:30px;
        color:#fff;
        display:flex;
        align-items: center;
        justify-content:center;
        font-weight:bold;
    }
    .apply{
        margin:0 auto;
        width:70vw;
        margin-top:20px;
        line-height:1.5;
        font-size:16px;
        display:flex;
        flex-direction:column;
        div{
            margin-bottom:30px;
        }
    }
    .down{
        border:1px solid black;
        width:150px;
        height:50px;
        margin: 0 auto;
        margin-bottom:100px;
        border-radius: 30px;
        display:flex;
        justify-content:center;
        align-items: center;
        font-size:16px;
        cursor:pointer;
        box-shadow: 5px 5px 10px 5px #ccc;
    }
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
    #apply{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 70vw;
        margin: 0 auto;
    }
  h1{
    margin:50px auto;
    width:70vw;
    font-size:70px;
    font-weight:bold;
  }
  h2{
    margin:50px auto;
    width:70vw;
    font-size:35px;
    font-weight: normal;
  }
  .info{
    margin:0 auto;
    width:70vw;
    margin-top:20px;
    line-height:1.5;
    font-size:20px;
  }
  text-align:left;

  #back{
    background-image: url('/img/audi.JPG');
    background-size: cover;
    width:100vw;
    height:350px;
    font-size:30px;
    color:#fff;
    display:flex;
    align-items: center;
    justify-content:center;
    font-weight:bold;
}
.apply{
    margin:0 auto;
    width:70vw;
    margin-top:20px;
    line-height:1.5;
    font-size:20px;
    display:flex;
    div{
        margin-right:100px;
    }
}
.down{
    border:1px solid black;
    width:200px;
    height:50px;
    margin: 50px auto;
    border-radius: 30px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:20px;
    cursor:pointer;
    box-shadow: 5px 5px 10px 5px #ccc;
}
#audition-apply{
    display:flex;
    width: 70vw;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
}
.apply-box{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    height: 150px;
  
}
}



`
const Audition = () => {
    return (
        <Div>
            <h1>ABOUT WE</h1>
            

            <div id='back'>"The greater the obstacle, the more glory in overcoming it"</div>
            <h2 className="fade-in">더블유이엔터테인먼트는 새로운 아티스트를 발굴하기 위해<br/> 늘 오디션 문을 열어놓고 있습니다.</h2>
            <div className='info'>
               
                국적, 나이, 성별 상관없이 누구나 자신의 꿈을 펼치기 위해 도전하고자 하는 인재를 기다리고 있습니다.<br/>
                더블유이엔터테인먼트는 적극적인 신인 개발을 통해 아티스트의 다양한 잠재력을 발굴하고 대중에게<br/> 
                매력적으로 다가갈 수 있도록 돕는 든든한 지원자가 될 것입니다.<br/>
            
            </div>

            <h2>오디션 지원절차 및 방법</h2>
            <div id='audition-apply'>
                <div className='apply-box'>
                    <TfiPencilAlt size={window.innerWidth < 768 ? "30px" : "95px"} />
                    <p>지원서 다운로드 및 작성</p>
                </div>
                <TiChevronRightOutline size={window.innerWidth < 768 ? "20px" : "50px"} className='right'/>
                <div className='apply-box'>
                    <MdOutlineMarkEmailRead  size={window.innerWidth < 768 ? "35px" : "95px"}/>
                    <p>E-mail 작성</p>
                </div>
                <TiChevronRightOutline size={window.innerWidth < 768 ? "20px" : "50px"} className='right' />
                <div className='apply-box'>
                    <MdDisplaySettings size={window.innerWidth < 768 ? "35px" : "95px"}/>
                    <p>1차 서류심사</p>
                </div>
                <TiChevronRightOutline size={window.innerWidth < 768 ? "20px" : "50px"} className='right'/>
                <div className='apply-box'>
                    <IoIosPeople  size={window.innerWidth < 768 ? "40px" : "95px"}/>
                    <p>2차 현장 오디션</p>
                </div>
            </div>


            <h2>접수처</h2>
            <div  className='apply'>
                <div>
                    이메일 <br/>
                    weentertainment24@gmail.com
                </div>
                <div>
                    우편 접수<br/>
                    (우)06099 서울특별시 강남구 선릉로127길 5-6, 2층 2202호
                </div>
            </div>
            <div className='down'>지원서 다운로드</div>
        </Div>
    );
};

export default Audition;