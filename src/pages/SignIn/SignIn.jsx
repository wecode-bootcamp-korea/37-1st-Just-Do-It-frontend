import React from 'react';
import './SignIn.scss';

function SignIN() {
  return (
    <div className="SignInWrapper">
      <h1 className="SignInTitle">나이키 멤버 가입</h1>
      <p className="SignInInfo">
        멤버가 되어 나이키가 제공하는
        <br />
        최고의 제품과 혜택을 만나보세요.
      </p>
      <form>
        <input className="SignInInput" type="text" placeholder="ID" />
        <input className="SignInInput" type="text" placeholder="P/W" />
        <input
          className="SignInInput"
          type="text"
          placeholder="P/W 다시 입력"
        />
        <input className="SignInInput" type="text" placeholder="주소" />
        <input className="SignInInput" type="text" placeholder="이름" />
        <button className="SignInButtonMan">남성</button>
        <button className="SignInButtonWoman">여성</button>
        <input className="SignInInput" type="text" placeholder="생년월일" />
        <button className="SignInButtonSignIn">
          회원가입하기 (만 14세 이상)
        </button>
      </form>
    </div>
  );
}

export default SignIN;
