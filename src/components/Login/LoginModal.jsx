import React, { useState } from 'react';
// import { loginConfig } from '../../config';
import { Link } from 'react-router-dom';
import './LoginModal.scss';

function Login({ closeTargetModal }) {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    userName: '',
    password: '',
  });

  // useEffect(() => {
  //   localStorage.setItem('token', '이거슨 토큰이요');
  //   localStorage.setItem('userInfo', '이거슨 유저이름이다.');
  // }, []);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };
  const handleLogin = e => {
    e.preventDefault();

    // localStorage.setItem(
    //   'token',
    //   'token-dwqdwqkdnjqwlkfjklqwjflqwkjfqwldjqwljdwq'
    // );
    // localStorage.setItem('fullName', '이윤승');

    // alert('로그인 성공');

    closeTargetModal('login');

    // // 로그인 요청
    // `${loginConfig.api}/Login`
    fetch('http://192.168.243.221:8000/users/signin', {
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
      })
      .then(data => {
        // 만약에 로그인을 성공하면

        // token, fullName을 로컬스토리지에 저장한다.
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('fullName', data.fullName);

        alert('로그인 성공');
      })
      .catch(error => {
        // 만약에 실패하면
        console.log(error);
        // 알림을 띄어준다.
        alert('로그인 실패');
      });
  };
  // console.log(localStorage.getItem('token'));
  // console.log(localStorage.getItem('userInfo'));

  const handleCloseModal = () => {
    closeTargetModal('login');
  };

  return (
    <div
      className="loginWrapper"
      onClick={() => {
        handleCloseModal();
      }}
    >
      <div
        className="login"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div>
          <button
            className="loginModalDelete"
            onClick={() => {
              handleCloseModal();
            }}
          >
            <i className="fa-solid fa-x" />
          </button>
          <p className="loginIcon">나이키</p>
          <h1 className="loginTitle">나이키 로그인</h1>
          <input
            className="loginId block"
            name="userName"
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
            <Link
              to="/sign-in"
              className="signIn"
              onClick={() => {
                handleCloseModal();
              }}
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
