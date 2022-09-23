import React, { useState, loginConfig } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };
  const handleLogin = e => {
    e.preventDefault();

    fetch(`${loginConfig.api}/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);

        navigate('/Main');
      });
  };
  return (
    <div className="login">
      <form action="">
        <button className="loginModalDelete">
          <i className="fa-solid fa-x" />
        </button>
        <p className="loginIcon">나이키</p>
        <h1 className="loginTitle">나이키 로그인</h1>
        <input
          className="loginId block"
          name="username"
          type="text"
          placeholder="아이디"
          onChange={handleChangeInput}
          value={inputValue.username}
        />
        <input
          className="loginPw block"
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChangeInput}
          value={inputValue.password}
        />
        <div className="loginHelp">
          <button className="block">
            <input type="checkbox" className="checkBox" />
            로그인 유지하기
          </button>
          <button className="block">아이디/비밀번호 찾기</button>
        </div>
        <button className="loginButton block" onClick={handleLogin}>
          로그인
        </button>
        <button className="loginKakao block">
          <i className="fa-solid fa-message" />
          카카오계정 로그인
        </button>
        <button className="loginFacebook block">
          <i className="fa-brands fa-facebook-f" />
          페이스북으로 로그인
        </button>
        <p className="signInCheck">
          회원이 아니신가요?
          <Link to="/sign-in" className="signIn">
            회원가입
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
