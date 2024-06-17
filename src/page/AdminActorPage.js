import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Div = styled.form`
  width: 70vw;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  .box {
    display: flex;
  }
  div {
    margin: 10px;
  }
  #submit {
    width: 100px;
    margin: 0 auto;
  }
  .subpic {
    margin-top: 30px;
  }
  h1, h2 {
    text-align: center;
  }
  a {
    text-align: center;
    margin-top: 10px;
  }
`;

const AdminActorPage = () => {
  const [schoolList, setSchool] = useState([]);
  const [winList, setWin] = useState([]);
  const [hobbyList, setHobby] = useState([]);
  const [movieList, setMovie] = useState([]);
  const [dramaList, setDrama] = useState([]);
  const [playList, setPlay] = useState([]);
  const [cfList, setCf] = useState([]);
  const [bookList, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imgList, setImg] = useState([]);
  const { name } = useParams();
  const [actData, setData] = useState({
      name:'',
      ename:'',
      birthday: '',
      cm: '',
      insta: ''
  });


const navi = useNavigate();
  useEffect(() => {
    if (name) {
      const actList = async () => {
        try {
          const response = await axios.get(`http://localhost:5001/api/we/actorList/${name}`);
          console.log('배우 상세 불러오기 성공 :', response.data);
          
          // Ensure the lists are arrays
          setData(response.data);
          setImg(JSON.parse(response.data.imgList));
          setSchool(JSON.parse(response.data.schoolList));
          setWin(JSON.parse(response.data.winList));
          setHobby(JSON.parse(response.data.hobbyList));
          setMovie(JSON.parse(response.data.movieList));
          setDrama(JSON.parse(response.data.dramaList ));
          setPlay(JSON.parse(response.data.playList));
          setCf(JSON.parse(response.data.cfList ));
          setBook(JSON.parse(response.data.bookList));
        } catch (error) {
          console.error('배우 상세 불러오기 실패: ', error);
        }
      };
      actList();
    }
  }, [name]);

  console.log(name, actData);
  console.log(bookList)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
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
  
        if (response.status !== 200) {
          throw new Error('이미지 업로드 실패');
        }
  
        const imageUrl = response.data.url; // 서버에서 반환된 이미지 URL
        setImg([imageUrl]); // 기존 이미지를 덮어쓰기
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error uploading image:', error);
        setLoading(false);
        setError('이미지 업로드 중 오류가 발생했습니다.');
      }
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const actData = {
      imgList,
      name: e.target.name.value,
      ename: e.target.ename.value,
      birthday: e.target.birthday.value,
      schoolList,
      winList,
      cm: e.target.cm.value,
      hobbyList,
      insta: e.target.insta.value,
      movieList,
      dramaList,
      playList,
      cfList,
      bookList,
    };

    try {
      if (name) {
        await axios.put(`http://localhost:5001/api/we/updateactor/${name}`, actData);
        alert("배우 정보가 업데이트 되었습니다.")
        navi('/artist')
      } else {
        await axios.post('http://localhost:5001/api/we/addactor', actData);
        alert("배우가 저장되었습니다.")
        navi('/artist')
      }
    } catch (error) {
      console.error('배우 저장 실패:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...actData, [name]: value });
  };

  const onAddToList = (setter, list, e) => {
    e.preventDefault();
    const value = e.target.previousElementSibling.value;
    if (value) {
      setter([...list, value]);
      e.target.previousElementSibling.value = '';
    }
  };

  const onDeleteFromList = (setter, list, item) => {
    setter(list.filter(i => i !== item));
  };

  return (
    <Div onSubmit={onSubmit}>
      <h1>배우 등록 하기</h1>
      <h2>정보를 모두 입력해주세요</h2>
      <div>
        <p>메인사진</p>
        <input onChange={handleImageUpload} type='file' accept='image/*' name='mainpic' />
      </div>
      <div>
        <p className='subpic'>서브사진1</p>
        <input onChange={handleImageUpload} type='file' accept='image/*' name='subpic1' />
        <p className='subpic'>서브사진2</p>
        <input onChange={handleImageUpload} type='file' accept='image/*' name='subpic2' />
        <p className='subpic'>서브사진3</p>
        <input onChange={handleImageUpload} type='file' accept='image/*' name='subpic3' />
        <p className='subpic'>서브사진4</p>
        <input onChange={handleImageUpload} type='file' accept='image/*' name='subpic4' />
      </div>
      <div className='box'>
        <div>
          <p>배우이름</p>
          <input type='text' name='name' value={actData.name} onChange={handleInputChange} />
        </div>
        <div>
          <p>영어이름</p>
          <input type='text' name='ename' value={actData.ename} onChange={handleInputChange} />
        </div>
        <div>
          <p>생년월일</p>
          <input type='text' name='birthday' value={actData.birthday} onChange={handleInputChange} />
        </div>
        <div>
          <p>학력</p>
          <input type='text' name='school' />
          <button onClick={(e) => onAddToList(setSchool, schoolList, e)}>추가</button>
          <ul>
                {schoolList && schoolList.map((school) => (
        <li key={school} onDoubleClick={() => onDeleteFromList(setSchool, schoolList, school)}>
            {school}
        </li>
        ))}
          </ul>
        </div>
        <div>
          <p>수상</p>
          <input type='text' name='win' />
          <button onClick={(e) => onAddToList(setWin, winList, e)}>추가</button>
          <ul>
            {winList.map((win) => (
              <li key={win} onDoubleClick={() => onDeleteFromList(setWin, winList, win)}>
                {win}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>키</p>
          <input type='text' name='cm' value={actData.cm} onChange={handleInputChange} />
        </div>
        <div>
          <p>특기</p>
          <input type='text' name='hobby' />
          <button onClick={(e) => onAddToList(setHobby, hobbyList, e)}>추가</button>
          <ul>
            {hobbyList.map((hobby) => (
              <li key={hobby} onDoubleClick={() => onDeleteFromList(setHobby, hobbyList, hobby)}>
                {hobby}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>인스타계정</p>
          <input type='text' name='insta' value={actData.insta} onChange={handleInputChange} />
        </div>
      </div>
      <div className='box'>
        <div>
          <p>출연한 영화</p>
          <input type='text' name='movie' />
          <button onClick={(e) => onAddToList(setMovie, movieList, e)}>추가</button>
          <ul>
            {movieList.map((movie) => (
              <li key={movie} onDoubleClick={() => onDeleteFromList(setMovie, movieList, movie)}>
                {movie}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>출연한 드라마</p>
          <input type='text' name='drama' />
          <button onClick={(e) => onAddToList(setDrama, dramaList, e)}>추가</button>
          <ul>
            {dramaList.map((drama) => (
              <li key={drama} onDoubleClick={() => onDeleteFromList(setDrama, dramaList, drama)}>
                {drama}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>출연한 연극</p>
          <input type='text' name='play' />
          <button onClick={(e) => onAddToList(setPlay, playList, e)}>추가</button>
          <ul>
            {playList.map((play) => (
              <li key={play} onDoubleClick={() => onDeleteFromList(setPlay, playList, play)}>
                {play}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>출연한 CF</p>
          <input type='text' name='cf' />
          <button onClick={(e) => onAddToList(setCf, cfList, e)}>추가</button>
          <ul>
            {cfList.map((cf) => (
              <li key={cf} onDoubleClick={() => onDeleteFromList(setCf, cfList, cf)}>
                {cf}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>쓴 책</p>
          <input type='text' name='book' />
          <button onClick={(e) => onAddToList(setBook, bookList, e)}>추가</button>
          <ul>
            {bookList.map((book) => (
              <li key={book} onDoubleClick={() => onDeleteFromList(setBook, bookList, book)}>
                {book}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button id='submit' type='submit'>배우 등록하기</button>
      <Link to='/artist'>뒤로가기</Link>
    </Div>
  );
};

export default AdminActorPage;
