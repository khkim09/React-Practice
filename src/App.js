import React, { useState } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  // web이 App처럼 동작하게 하기 위해서 사용하는 state
  // state는 변경되면 html 자동 rendering 됨 (변수는 새로고침 필요)
  // 자주 바뀌는 데이터는 state로 저장
  let [title, changedTitle] = useState(['남자 코트 추천', '여자 코트 추천', '아동 코트 추천']);
  let [like, addLike] = useState(0)

  function AddLike() {
    addLike(like + 1);
  }

  function SortTitle() {
    var newArray = [...title];
    newArray.sort();
    changedTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="sort-button">
        <button onClick={ SortTitle }>사전 순 정렬</button>
        </div>
      <div className='list'>
        <h3> { title[0] } <FontAwesomeIcon icon={faHeart} onClick={ AddLike } style={{ cursor: 'pointer', color: 'red' }} /> { like }</h3> {/* 데이터 바인딩 */}
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] } </h3> {/* 데이터 바인딩 */}
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[2] } </h3> {/* 데이터 바인딩 */}
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
