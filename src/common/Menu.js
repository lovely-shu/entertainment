import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const Div = styled.div`
  background-color:rgba(249,67,194,0.9);
  color:#fff;
  width: 100vw;
  height:100vh;
  position:absolute;
  top:0;
  animation: ${({ isVisible }) => isVisible ? fadeIn : fadeOut} 0.4s ease-in-out;

 
  .menuList{
      display:flex;
      justify-content: space-evenly;
      margin-top:150px;
     a{
      color:#fff;
     }
  }
  #pr{
      display:flex;
      flex-direction:column;
      align-items:center;
  }

  #news{
      margin-bottom: 50px;
      font-weight:normal;
  }
  #notice{
    font-weight:normal;
  }
  .menuList a:hover{
      opacity:0.5;
      transition: opacity 0.3s ease-in-out;
  }
  #close{
      cursor:pointer;
  }
  .sns{
    display:flex;
    justify-content:space-between;
    width:40vw;
    margin: 0 auto;
    align-items: center;
    margin-top:200px;
  }


  
  /* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {
  #logoimg{
    width:160px;
    margin: 0 auto;

}
    .logo{
        display: flex;
        justify-content: space-between;
        width: 90vw;
        margin:0 auto;
        margin-top:50px;
        align-items: center;
    }
    .head-menu{
        margin-bottom:50px;
        font-size:20px;
      }
      #copy{
        margin-top:40px;
        opacity:0.6;
        font-size:18px;
        text-align:center;
      }
      
}

/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
  #logoimg{
    width:200px;
    margin: 0 auto;
}
    .head-menu{
        margin-bottom:50px;
        font-size:30px;
      }
      
    .logo{
        display: flex;
        justify-content: space-between;
        width: 18vw;
        margin-left:8vw;
        margin-top:50px;
        align-items: center;
    }
    #copy{
        margin-top:50px;
        opacity:0.6;
        font-size:20px;
        text-align:center;
      }
}


`;

const Menu = ({ setOnMenu }) => {
  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
  };

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setOnMenu(false);
    }
  };

  return (
    <>
    <Div isVisible={isVisible} onAnimationEnd={handleAnimationEnd}>
      <div className='logo'>
        <Link to='/'><img id='logoimg' src='/img/we2.png' alt='logo'/></Link>
        <div id='close' onClick={onClose}><IoCloseOutline size="50px" /></div>
      </div>
      <div className='menuList'>
        <Link to='/company' className='head-menu'>COMPANY</Link>
        <Link to='/artist' className='head-menu'>ARTIST</Link>
        <div id='pr'>
          <Link to='/pr' className='head-menu'>PR</Link>
          <Link  to='/news'  id='news'>News</Link>
          <Link to='/notice' id='notice'>Notice</Link>
        </div>
        <Link to='/audition' className='head-menu'>AUDITION</Link>
      </div>
      <div className='sns'>
                <div><Link ><FaYoutube color='white' size="40px"/></Link></div>
                <div><Link><SiNaver color='white' size="30px"/></Link></div>
                <div><Link><FaInstagram color='white' size="40px"/></Link></div>
    </div>
    <div id='copy'>
        ALL RIGHTS RESERVED. 2024 @ WE ENTERTAINMENT
    </div>
    </Div>
 
    

    </>
  );
};

export default Menu;