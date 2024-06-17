import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Div = styled.div`
scroll-behavior: smooth;
width:100vw;
margin:0 auto;
text-align:center;
p{
    letter-spacing: 3px;
}


  h2{
    margin: 0 auto;
  }
  .view:hover{
    opacity:0.8;
  }
  .more{
    position:relative;
    top:-150px;
    height:50px;
    background-color:rgba(0,0,0,0.6);
    color:white;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
  }
  .view:hover .more{
    opacity:1;
    transition: 0.3s ease-in-out;
    cursor:pointer;
    
  }

  /* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    h1{
        font-size:30px;
        font-weight:bold;
        margin-bottom:50px;
      }
    img{
        width:100vw;
        margin:0 auto;
    }
    .slide{

       width:100vw;
        margin-bottom:200px;
    }
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
    h1{
        font-size:70px;
        font-weight:bold;
        margin-bottom:50px;
      }
    img{
        width:400px;
    }
    .slide{
        margin:0 auto;
        width:400px;
        margin-bottom:200px;
    }
}
`

const ArtistList = () => {
    const [actorList, setActor] = useState([])
    const navi = useNavigate();
    const auth = localStorage.getItem('id');
    useEffect(() => {
        const actList = async () => {
          try {
            const response = await axios.get('http://localhost:5001/api/we/actorList');
            console.log('배우 리스트 불러오기 성공 :', response.data);
            setActor(response.data);
          } catch (error) {
            console.error('배우 리스트 불러오기 실패: ', error);
          }
        };
        actList();
      }, []);
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500 // 2초마다 슬라이드 변경

      };

    const onDetail = (name)=>{
        navi(`/artist/${name}`)
    }
    return (
        <Div>         
           {auth? <Link to='/adminActor'>배우 등록하기</Link> : null}
                <h1>ARTIST</h1>
                {actorList.map(actor=> 
        
                    <div className='slide'>
                        <div className='view'>
                            <Slider {...settings}>
                            {JSON.parse(actor.imgList).map((imgUrl, index) => (
                            <div>
                                <img src={imgUrl} alt="img" />
                            </div>
                        ))}
                            </Slider>
                            <div onClick={()=>onDetail(actor.name)} className='more'>
                                VIEW MORE+
                            </div>
                        </div>
                        <h2>{actor.ename}</h2>
                        <p>{actor.name}</p>
                    </div>
                    )}
                    
          
        </Div>
    );
};

export default ArtistList;