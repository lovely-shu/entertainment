import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, json, useParams } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
  
    h1{
        margin:50px auto;
        width:70vw;
        font-size:30px;
        font-weight:bold;
        text-align:center;
      }
      h2{
        text-align:center;
        margin:20px auto;
        width:70vw;
        font-size:20px;
        font-weight:bold;
      }
      .box{
        img{
            width:100vw;
        }
      }
      #profile{
        font-size:20px;
        font-weight:bold;
        margin-bottom:10px;
        text-align:center;
      }
      .profile-table{
        margin: 0 auto;
        width:90vw;
        td{
            padding:5px;
        }
      }
      .box2{
        width:80vw;
        margin:0 auto;
        text-align:center;
        line-height:1.5;
      }
      .title{
        text-align:center;
        margin:20px auto;
        width:70vw;
        font-size:20px;
        font-weight:bold;
      }
      .photo{
        text-align:center;
        margin:20px auto;
        width:70vw;
        font-size:20px;
        font-weight:bold;
      }
      .box3{
        width:100vw;
        margin:0 auto;
        img{
            width:100vw;
        }
      }
      #tolist{
        width:70vw;
        text-decoration:none;
        color: black;
      display:flex;
      justify-content:center;
      align-items:center;
      border-top:1px solid #ccc;
      padding-top:20px;
      margin:50px auto;
    }
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
    width:70vw;
    margin:0 auto;
    h1{
        margin:50px auto;
        width:70vw;
        font-size:70px;
        font-weight:bold;
      }
    h2{
        margin:50px auto;
        width:70vw;
        font-size:40px;
        font-weight: normal;
      }
    .box{
        display:flex;
        width:70vw;
        justify-content:space-between;
        img{
            width: 400px;
        }
    }
    .info-box{
        display:flex;
        flex-direction:column;
        justify-content:left;
        margin-left:100px;
    }
    #profile{
        font-size:25px;
        margin-bottom:30px;
    }
    tr{
        width:100px;
        height:40px;
        font-size:20px;
    }
    #insta{
        margin-top: 20px;
    }
.box2{
    display:flex;
    width: 80vw;
    font-size:18px;
    line-height:1.5;
}
.title{
    font-size:20px;
    font-weight:bold;
    margin-bottom: 30px;
    margin-top:90px;
}
.art{
    margin-right:50px;
}
.photo{
    font-size:30px;
    margin-top:80px;
    margin-bottom:30px;
}
.box3{
    img{
        margin-right:20px;
        width:250px;
    }
}
#tolist{
    width:70vw;
    text-decoration:none;
    color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  border-top:1px solid #ccc;
  margin-top:50px;
  padding-top:20px;
}
}



`
const ArtistDetail = () => {
    const [actor, setActor] = useState({});
    const {name} = useParams();
    const auth = localStorage.getItem('id');
    const navi = useNavigate();
    useEffect(() => {
        if(name){
        const actList = async () => {
          try {
            const response = await axios.get(`http://localhost:5001/api/we/actorList/${name}`);
            console.log('배우 상세 불러오기 성공 :', response.data);
            setActor(response.data);
          } catch (error) {
            console.error('배우 상세 불러오기 실패: ', error);
          }
        };
        actList();
        }
      }, [name]);
      if (!Object.keys(actor).length) {
        return <div>Loading...</div>;
    }
    const onDelete = async () => {
        try {
          await axios.delete(`http://localhost:5001/api/we/deleteactor/${name}`);
          navi('/artist'); // 삭제 후 목록 페이지로 이동
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };

    return (
        <Div>
            <h1>ARTIST</h1>
            <div className='box'>
                <div>
                    <img  src={JSON.parse(actor.imgList)[0]} alt='main'/>
                </div>
                <div className='info-box'>
                    <h2>{actor.name} [ {actor.ename} ]</h2>
                    <p id='profile'>Profile</p>
                    <table className='profile-table'>
                        <tr className='info'><td>생년월일</td><td>{actor.birthday}</td></tr>
                        <tr className='info'><td>키</td><td>{actor.cm}</td></tr>
                        <tr className='info'><td>학력</td><td>{JSON.parse(actor.schoolList)[0]}</td></tr>
                        {JSON.parse(actor.winList).length === 0 ? '' : (
                            <tr className='info'>
                                <td>수상</td>
                                {JSON.parse(actor.winList).map(win => <td>{win}</td>)}
                            </tr>
                        )}
                        {JSON.parse(actor.hobbyList).length === 0 ? '' : (
                            <tr id='hobbytr' className='info'>
                                <td id='hobbytd'>특기</td>
                                <td id='hobbydiv'> {JSON.parse(actor.hobbyList).map(hobby =><div>{hobby}</div>)}</td>
                            </tr>
                        )}
                        <tr className='info'>   
                            <td colSpan="2"><Link to={actor.insta}><FaInstagram color='pink' id='insta' size="35px"/></Link></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='box2'>

                {JSON.parse(actor.movieList).length === 0 ? '' : (
                                <div className='art'>
                                    <p className='title'>MOVIE</p>
                                    {JSON.parse(actor.movieList).map(movie => <p>{movie}</p>)}
                                </div>
                            )}
                {JSON.parse(actor.movieList).length === 0 ? '' : (
                    <div className='art'>
                        <p className='title'>DRAMA</p>
                        {JSON.parse(actor.dramaList).map(drama => <p>{drama}</p>)}
                    </div>
                )}
                {JSON.parse(actor.playList).length === 0 ? '' : (
                    <div className='art'>
                        <p className='title'>THEATER</p>
                        {JSON.parse(actor.playList).map(play => <p>{play}</p>)}
                    </div>
                )}
                {JSON.parse(actor.cfList).length === 0 ? '' : (
                <div className='art'>
                    <p className='title'>CF</p>
                    {JSON.parse(actor.cfList).map(cf => <p>{cf}</p>)}
                </div>
                )}
                {JSON.parse(actor.bookList).length === 0 ? '' : (
                <div className='art'>
                    <p className='title'>BOOK</p>
                    {JSON.parse(actor.bookList).map(book => <p>{book}</p>)}
                </div>
                )}
            </div>
            <p className='photo'>PHOTO</p>
            <div className='box3'>
                    <img src={JSON.parse(actor.imgList)[1]} alt='main'/>
                    <img  src={JSON.parse(actor.imgList)[2]} alt='main'/>
                    <img  src={JSON.parse(actor.imgList)[3]} alt='main'/>
                    <img  src={JSON.parse(actor.imgList)[4]} alt='main'/>
            </div>
                    {auth ?<div> <button onClick={onDelete}>삭제하기</button> <Link to={`/adminActor/${name}`}>수정하기</Link></div> :'' }
                    <Link id='tolist' to='/artist'>돌아가기</Link>
        </Div>
    );
};

export default ArtistDetail;