import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
const Div = styled.div`

/* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {
    #logoimg{
        width:160px;
        margin: 0 auto;
 
    }
  .menu2 , .menu3{
    display:none;
  }
  .menu1{
    align-items:center;
    width:90vw;
    display:flex;
    justify-content: space-between;
  }
}

/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
    #logoimg{
        width:200px;
        margin: 0 auto;
    }
    .menu2, .menu3 {
        display:flex;
        justify-content: space-evenly;
    }
    .menu2{
        padding-top:20px;
        width:50vw;
    }
    .menu2 div{
        width:140px;
    }
    .menu3{
        width:200px;
        align-items:center;
    }
    .menu1{
        display:flex;
        align-items:center;
        justify-content: space-evenly;
        width:30vw;
    }
    #pr{
        width:60px;
    }
}

position:fixed;
background:#fff;
top:0;
z-index:999;
align-items:center;
font-weight:bold;
font-size:20px;
height:100px;
width: 100vw;
display:flex;
justify-content:space-evenly;


a{
    text-decoration:none;
    color:black;
}
.sub-menu{
    position:relative;
    top:10px;
    right:55px;
   display:flex;
   justify-content:space-between;
   font-size:18px;
   font-weight:normal;
   opacity:0;
   transition: opacity 0.3s ease-in-out;
   

}
#pr:hover .sub-menu{
    opacity:1;
}
#ham-menu{
    cursor:pointer;
    
}
.menu:hover{
    opacity:0.5;
    transition: opacity 0.3s ease-in-out;
}
`

const Header = () => {
    const [onMenu, setOnMenu] = useState(false)
    const auth = localStorage.getItem('id');
    const navi = useNavigate();
    const showMenu = ()=>{
        setOnMenu(true);
    }
    const onLogout = ()=>{
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('id');
        navi('/')
    }
    return (
        <Div> 
            <div className='menu1'>
                <Link to="/" className='logo'><img id='logoimg' src='/img/weentlogo.png' alt='logo' /></Link>
                <div className='menu' id='ham-menu'
                    onClick={showMenu}>
                    <HiOutlineMenuAlt1 size="30px"/>
                </div>
                {auth? <button onClick={onLogout}>관리자 로그아웃</button> : null }
            </div>
            <div className='menu2'>
                
                <div className='menu'><Link to='/company'>COMPANY</Link></div>
                <div className='menu'><Link to='/artist'>ARTIST</Link></div>
                <div id='pr'>
                    <Link to='/pr' className='menu'>PR</Link>
                    <div className='sub-menu'>
                        <Link to='/news' className='menu'>News</Link>
                        <Link to='/notice' className='menu'>Notice</Link>
                    </div>
                </div>
                <div className='menu'><Link to='/audition'>AUDITION</Link></div>
            </div>
            <div className='menu3'>
                <div><Link ><FaYoutube size="30px"/></Link></div>
                <div><Link><SiNaver size="22px"/></Link></div>
                <div><Link><FaInstagram size="30px"/></Link></div>
            </div>
            {onMenu?
            <Menu onMenu={onMenu} setOnMenu={setOnMenu}/>:''
            }
        
        </Div>
    );
};

export default Header;