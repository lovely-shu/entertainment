import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  width: 70vw;
  margin: 100px auto;
  #title {
    width: 700px;
    height: 50px;
  }
`;

const NoticeWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const quillRef = useRef(); 
  const { postId } = useParams();
  const navi = useNavigate();
  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onContent = (e) => {
    setContent(e);
  };
  useEffect(() => {
   
    if (postId) {
      axios.get(`http://localhost:5001/api/we/getnotice/${postId}`)
        .then(response => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch(error => {
          console.error('Error fetching post data:', error);
        });
    }
  }, [postId]);

  const onWrite = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content
    };

    try {
      if (postId) {
        await axios.put(`http://localhost:5001/api/we/updatenotice/${postId}`, postData);
        console.log('게시물이 수정되었습니다.');
      } else {
        await axios.post('http://localhost:5001/api/we/writenotice', postData);
        console.log('게시물이 저장되었습니다.');
      }
    } catch (error) {
      console.error('게시물 저장 실패:', error);
    }
navi('/pr')
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
          const response = await axios.post('http://localhost:5001/api/img', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          if (!response.status === 200) {
            throw new Error('이미지 업로드 실패');
          }

          const imageUrl = response.data.url; // 서버에서 반환된 이미지 URL

          // 에디터에 이미지 삽입
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageUrl);

          setLoading(false);
          setError(null);
        } catch (error) {
          console.error('Error uploading image:', error);
          setLoading(false);
          setError('이미지 업로드 중 오류가 발생했습니다.');
        }
      }
    };
  };
  

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image'],
        ],
        handlers: {
          image: handleImageUpload,
        },
      }
    }),
    [],
  );

  return (
    <Div>
      <form onSubmit={onWrite}>
        <h1>notice 글쓰기</h1>
        <input
          id="title"
          name="title"
          value={title}
          onChange={onTitle}
          placeholder="제목을 입력해주세요."
        />
        <div>
          {loading && <p>이미지 업로드 중...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            onChange={onContent}
            value={content}
            id="quillBox"
            placeholder="내용을 입력해주세요."
            style={{ height: '300px', marginBottom: '100px', width: '700px' }}
            modules={modules}
            formats={[
              'header', 'font', 'size',
              'bold', 'italic', 'underline', 'strike', 'blockquote',
              'list', 'bullet', 'indent',
              'link', 'image',
              'color', 'background',
            ]}
          />
          <button type="submit">저장하기</button>
          <Link to="/pr">취소하기</Link>
        </div>
      </form>
    </Div>
  );
};

export default NoticeWrite;
