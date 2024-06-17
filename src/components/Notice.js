import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Div = styled.div`

/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
  .day{
    font-size:12px;
    color:#454545;
  }
    h1{
    margin:0 auto;
    width:70vw;
    font-size:30px;
    font-weight:bold;
  }


.box{
  width:70vw;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  padding:30px 0;
  border-bottom: 1px solid #ccc;
}
.content{
  margin-top:20px;
  font-size:16px;
  line-height:2;
}
.title{
  font-size:20px;
  font-weight:bold;
}
}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {

  h1{
    margin:50px auto;
    width:70vw;
    font-size:70px;
    font-weight:bold;
  }
  .title{
    font-size:28px;
    font-weight:bold;
}

.box{
  width:70vw;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  padding:50px 0;
  border-bottom: 1px solid #ccc;
}
}



a{
    text-decoration:none;
    color: black;
}


.write{
  border: 1px solid black;
  padding:5px;
  text-decoration:none;
  color: black;
display:flex;
justify-content:center;
width:110px;
margin: 0 auto;
  background: #ccc;
}
`
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    background: #fff;
    cursor: pointer;
    border :none;
    &:disabled {
      color: #aaa;
      cursor: default;
    }

    &:not(:disabled):hover {
      background: #eee;
    }
  }
`;



const Notice = () => {
  const [news, setNews] = useState([]);
  const auth = localStorage.getItem('id');
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const noticeList = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/we/noticelist');
        console.log('공지 리스트 불러오기 성공 :', response.data);
        setNews(response.data);
      } catch (error) {
        console.error('공지 리스트 불러오기 실패: ', error);
      }
    };
    noticeList();
  }, []);


  const extractTextFromContent = (content) => {
    // HTML 문자열에서 태그를 제거하여 순수한 텍스트만 추출
    const text = content.replace(/<[^>]*>/g, '');
    // 문자열이 400자를 초과하는 경우 줄임표(...) 추가
    return text.length > 400 ? text.slice(0, 200) + '...' : text;
  };

const handleClick = (pageNumber) =>{
  setCurrentPage(pageNumber);
}

const currentItems = () =>{
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return news.slice(indexOfFirstItem, indexOfLastItem);
}

const renderPageNumbers = ()=>{
  const pageNumbers = [];
  for ( let i = 1; i<=Math.ceil(news.length / itemsPerPage); i++){
    pageNumbers.push(i);
  }
  return pageNumbers.map(number =>(
    <button
    key={number}
    onClick={()=> handleClick(number)}
    disabled={currentPage === number}
    >
      {number}
    </button>
  ));
};

useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);

  return (
    <Div>
        {auth? <Link className='write' to='/adminNoticeWrite'>Notice 글쓰기</Link> : null}
           <h1>NOTICE</h1>
         
          {currentItems().map(item => (
            <div className='box' key={item.postId}>
                <div className='title'><Link to={`/noticeDetail/${item.postId}`}>{item.title}</Link></div>
                <div className='day'>{formatDate(item.writeDay)}</div>
            </div>
        
          ))}
 <Pagination>
      {renderPageNumbers()}
    </Pagination>
      </Div>
  );
};

export default Notice;
