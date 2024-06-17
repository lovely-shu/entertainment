import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

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
    margin-bottom: 20px;
  }

  h2{
    font-size:20px;
    font-weight:normal;    

  }
  img{
    
    width:70vw;
  }
  .info{
    flex-direction:column;
  }

}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
  h1 {
    font-size: 70px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 30px;
    font-weight: normal;
  }
  img {
    width: 550px;
  }
}
 
  width: 70vw;
  margin: 0 auto;
 
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  .content {
    padding-top: 30px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: black;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

const NoticePost = () => {
  const { postId } = useParams(); // URL 파라미터에서 이름 추출
  const [post, setPost] = useState(null); // 게시글 상태
  const auth = localStorage.getItem('id');
  const navi = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/we/noticepost/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }
  const onDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/we/deletenotice/${Number(postId)}`);
      navi('/pr'); // 삭제 후 목록 페이지로 이동
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  return (
    <Div>
      <h1>NOTICE</h1>
      <div className="info">
        <h2>{post.title}</h2>
        <p className='day'>{formatDate(post.writeDay)}</p>
      </div>
      <p className="content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
      {auth? <div> <button onClick={onDelete}>삭제하기</button> 
                <Link to={`/adminNoticeWrite/${post.postId}`}> 수정하기 </Link> </div> : null}
              
      <Link className="toList" to="/pr">돌아가기</Link>
    </Div>
  );
};

export default NoticePost;