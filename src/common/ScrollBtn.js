import React, { useEffect, useState } from 'react';
import { SlArrowUpCircle } from "react-icons/sl";
import styled from 'styled-components';


const Div = styled.div`

/* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {
    bottom:50px;
    left:85vw;
}
/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
    bottom:40px;
    left:90vw;
}
z-index:999;
position:fixed;
width:100vw;
#btn{
    border-radius:50px;
    cursor:pointer;
    background-color: #fff;
}
#btn:hover{
    transition: 0.4s ease-in-out;
    background-color:rgba(0,0,0,0.9);
    color:white;

}
`
const ScrollBtn = () => {
    const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? '50px' : '60px');

    const handleResize = () => {
        setIconSize(window.innerWidth < 768 ? '50px' : '60px');
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <Div>
            <SlArrowUpCircle id='btn' onClick={scrollToTop} size={iconSize}/>
        </Div>
    );
};

export default ScrollBtn;