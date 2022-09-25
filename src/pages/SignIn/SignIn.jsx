import React, { useState } from 'react';
import './SignIn.scss';

function SignIn() {
  const [inputValue, setInputValue] = useState({
    userName: '',
    password: '',
    passwordForCheck: '',
    address: '',
    fullName: '',
    phoneNumber: '',
    birth: '',
    gender: '2',
  });
  const handleRadioInput = e => {
    const { value } = e.target;
    setInputValue(prev => ({ ...prev, gender: value }));
  };
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSignUp = e => {
    e.preventDefault();
    const idReg = /^[a-zA-Z0-9_-]{6,99}$/;
    const pwReg = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
    const birthReg =
      /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const mobileReg = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;

    const isAllowedAge = birth => {
      const today = new Date();
      const todayTime = today.getTime();
      const birthTime = new Date(inputValue.birth);
      const ageReg = Math.floor(
        (todayTime - birthTime) / (1000 * 60 * 60 * 24 * 365)
      );

      const minAllowedAge = 15;
      return ageReg >= minAllowedAge;
    };

    if (!idReg.test(inputValue.userName))
      return alert('아이디 양식에 맞지 않음');
    if (!(inputValue.userName.length > 6)) return alert('ID가 짧음');
    if (!pwReg.test(inputValue.password)) return alert('비밀번호가 잘못됨');
    if (!(inputValue.password === inputValue.passwordForCheck))
      return alert('비밀번호가 안같음');
    if (!mobileReg.test(inputValue.phoneNumber)) return alert('폰번호 똑바로');
    if (!birthReg.test(inputValue.birth)) return alert('양식에 맞지 않아');
    if (!isAllowedAge(inputValue.birth)) return alert('나이는 15살 이상~~');
    if (inputValue.gender === '2') return alert('성별도 체크');

    const submitData = {
      userName: inputValue.userName,
      password: inputValue.password,
      address: inputValue.address,
      fullName: inputValue.fullName,
      phoneNumber: inputValue.phoneNumber,
      birth: inputValue.birth,
      gender: inputValue.gender,
    };

    fetch('http://172.20.10.3:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(submitData),
    }).then(response => response);
  };

  return (
    <div className="signIn">
      <h1 className="SignInTitle">나이키 멤버 가입</h1>
      <p className="SignInInfo">
        멤버가 되어 나이키가 제공하는
        <br />
        최고의 제품과 혜택을 만나보세요.
      </p>
      <div id="signInContainer">
        <input
          className="signInInput"
          name="userName"
          type="text"
          placeholder="사용하실 ID를 입력해주세요."
          onChange={handleChangeInput}
          value={inputValue.userName}
        />
        <input
          className="signInInput"
          name="password"
          type="password"
          placeholder="영문 대 소문+숫자+특수문자 8~16자리((),<> 사용불가)"
          onChange={handleChangeInput}
          value={inputValue.password}
        />
        <input
          className="signInInput"
          name="passwordForCheck"
          type="password"
          placeholder="패스워드를 다시 입력해 주세요."
          onChange={handleChangeInput}
          value={inputValue.passwordForCheck}
        />
        <input
          className="signInInput"
          name="fullName"
          type="text"
          placeholder="이름을 입력해 주세요."
          onChange={handleChangeInput}
          value={inputValue.fullName}
        />
        <input
          className="signInInput"
          name="address"
          type="text"
          placeholder="주소를 입력해 주세요."
          onChange={handleChangeInput}
          value={inputValue.address}
        />
        <input
          className="signInInput"
          name="phoneNumber"
          type="text"
          placeholder="휴대폰 번호 '-'표 없이 입력해 주세요."
          onChange={handleChangeInput}
          value={inputValue.phoneNumber}
        />
        <input
          className="signInInput"
          type="text"
          placeholder="생년월일 예)2020.02.02"
          name="birth"
          onChange={handleChangeInput}
          value={inputValue.birth}
        />
        <div className="genderCheckBox">
          <button className="manCheckBtn">
            <input
              className="SignInButtonMan"
              name="gender"
              type="radio"
              placeholder="남성"
              value="1"
              checked={inputValue.gender === '1'}
              onChange={handleRadioInput}
            />
            <p className="man">남성</p>
          </button>
          <button className="womanCheckBtn">
            <input
              className="SignInButtonWoman"
              name="gender"
              type="radio"
              placeholder="여성"
              value="0"
              checked={inputValue.gender === '0'}
              onChange={handleRadioInput}
            />
            <p className="woman">여성</p>
          </button>
        </div>
        <button className="SignInButtonSignIn" onClick={handleSignUp}>
          회원가입하기 (만 14세 이상)
        </button>
      </div>
    </div>
  );
}
export default SignIn;
