import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <div className="loginWrapper">
      <div className="formContainer">
        <form action="">
          <button className="loginModalDelete">
            <i className="fa-solid fa-x" />
          </button>
          <p className="loginIcon">나이키</p>
          <h1 className="loginTitle">나이키 로그인</h1>
          <input className="loginId block" type="text" placeholder="아이디" />
          <input className="loginPw block" type="text" placeholder="비밀번호" />
          <div className="loginHelp">
            <button className="block">
              <input type="checkbox" className="checkBox" />
              로그인 유지하기
            </button>
            <button className="block">아이디/비밀번호 찾기</button>
          </div>
          <button className="loginButton block">로그인</button>
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
    </div>
  );
}

export default Login;
