import React, { useState } from 'react';
import { SIGN_UP_CONFIG } from '../../config';
import { SIGN_UP_INPUT_DATA } from './SIGN_UP_DATA';
import './SignUp.scss';

function SignUp() {
  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
    passwordForCheck: '',
    address: '',
    fullName: '',
    phoneNumber: '',
    birth: '',
    gender: '2',
  });

  const handleChangeRadio = ({ target: { value } }) =>
    setInputs(prev => ({ ...prev, gender: value }));

  const handleChangeInputs = ({ target: { name, value } }) =>
    setInputs({ ...inputs, [name]: value });

  const isAllowedAge = birth => {
    const today = new Date();
    const todayTime = today.getTime();
    const birthTime = new Date(birth);
    const ageReg = Math.floor(
      (todayTime - birthTime) / (1000 * 60 * 60 * 24 * 365)
    );

    const minAllowedAge = 15;
    return ageReg >= minAllowedAge;
  };

  const validateSignUp = ({
    userName,
    password,
    passwordForCheck,
    phoneNumber,
    birth,
    gender,
  }) => {
    const idReg = /^[a-zA-Z0-9_-]{6,99}$/;
    const pwReg = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
    const birthReg =
      /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const mobileReg = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;

    if (!idReg.test(userName)) {
      throw new Error('아이디 양식에 맞지 않음');
    }

    if (!(userName.length > 6)) {
      throw new Error('ID가 짧음');
    }

    if (!pwReg.test(password)) {
      throw new Error('비밀번호가 잘못됨');
    }

    if (!(password === passwordForCheck)) {
      throw new Error('비밀번호가 안같음');
    }

    if (!mobileReg.test(phoneNumber)) {
      throw new Error('폰번호 똑바로');
    }

    if (!birthReg.test(birth)) {
      throw new Error('양식에 맞지 않아');
    }

    if (!isAllowedAge(birth)) {
      throw new Error('나이는 15살 이상~~');
    }

    if (gender === '2') {
      throw new Error('성별도 체크');
    }
  };

  const handleSignUp = value => {
    try {
      validateSignUp(value);

      fetch(`${SIGN_UP_CONFIG.api}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(value),
      })
        .then(response => {})
        .catch(e => console.error(e));
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="signUp">
      <h1 className="signUpTitle">나이키 멤버 가입</h1>
      <p className="signUpInfo">
        멤버가 되어 나이키가 제공하는
        <br />
        최고의 제품과 혜택을 만나보세요.
      </p>
      <div id="signUpContainer">
        {SIGN_UP_INPUT_DATA.map((item, idx) => (
          <input
            key={idx}
            {...item}
            value={inputs[item.name]}
            onChange={handleChangeInputs}
          />
        ))}
        <div className="genderCheckBox">
          <label
            htmlFor="man"
            className={inputs.gender !== '1' ? 'gender' : 'checkMan'}
          >
            <input
              id="man"
              name="gender"
              type="radio"
              value="1"
              checked={inputs.gender === '1'}
              onChange={handleChangeRadio}
            />
            남성
          </label>

          <label
            htmlFor="woman"
            className={inputs.gender !== '0' ? 'gender' : 'checkWoman'}
          >
            <input
              id="woman"
              name="gender"
              type="radio"
              value="0"
              checked={inputs.gender === '0'}
              onChange={handleChangeRadio}
            />
            여성
          </label>
        </div>
        <button className="signUpButton" onClick={() => handleSignUp(inputs)}>
          회원가입하기 (만 14세 이상)
        </button>
      </div>
    </div>
  );
}

export default SignUp;
