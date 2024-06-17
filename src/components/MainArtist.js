import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Div = styled.div`
scroll-behavior: smooth;
width:100vw;
margin:0 auto;


  h2{
    margin: 0 auto;
  }




  /* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {

h1{
    margin:0 auto;
    font-size:30px;
    font-weight:bold;
    margin-bottom:50px;
    text-align:center;
  }
    img{
        width:100vw;
        margin:0 auto;
    }
    .slide{

       width:100vw;
        margin-bottom:60px;
    }
}

/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
    h1{
        margin:0 auto;
        font-size:70px;
        font-weight:bold;
        margin-bottom:50px;
        text-align:center;
      }
    img{
        width:400px;
        margin:0 auto;
    }
    .slide{
        margin:0 auto;
        width:1300px;
        margin-bottom:200px;
    }
}
`

const MainArtist = () => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth < 1000 ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });

    const handleResize = () => {
        setSettings(prevSettings => ({
            ...prevSettings,
            slidesToShow: window.innerWidth < 1000 ? 1 : 3
        }));
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (

        <Div>

          
            <div className='slide' >
            <h1>ARTIST</h1>

                <Slider {...settings}>

                    <div>
                            <img src='/img/오정훈/1.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='/img/한세빈/사진2.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='img/장상우/1.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='/img/오정훈/3.jpg' alt="Slide 1" />
                    </div>
                   
                    <div>
                        <img  src='/img/한세빈/사진1.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='img/장상우/2.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='/img/오정훈/2.jpg' alt="Slide 1" />
                    </div>
                   
                    <div>
                        <img  src='/img/한세빈/사진5.jpg' alt="Slide 1" />
                    </div>
                    
                    <div>
                        <img src='img/장상우/3.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img  src='/img/한세빈/사진4.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='/img/오정훈/4.jpg' alt="Slide 1" />
                    </div>

                    <div>
                        <img src='img/장상우/4.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img  src='/img/한세빈/사진3.jpg' alt="Slide 1" />
                    </div>
                  
                    <div>
                        <img src='/img/오정훈/5.jpg' alt="Slide 1" />
                    </div>
                    <div>
                        <img src='img/장상우/5.jpg' alt="Slide 1" />
                    </div>
                </Slider>
           </div>
       
               
          
        </Div>
    );
};

export default MainArtist;