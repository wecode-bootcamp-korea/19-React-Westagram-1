import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      password: '',
      isEnable: false,
    }
  }

  //input태그가 변할때마다 state저장
  changeValue = (e) => {
    const { value, type } = e.target;
    const { validation } = this;
    this.setState(
      {
        [type]: value
      },
      validation
    );
  };

  //유효성검사
  validation = () => {
    const { text, password, isEnable } = this.state;
    this.setState(
      {
        isEnable: (text && text.includes('@')) && password.length >= 5
      }
    )
  }

  goToMain = () => {
    const { text, password, isEnable } = this.state;

    (text && password) && this.props.history.push('/mainns');

    // if (text && password) {
    //   this.props.history.push('/mainns');
    // }
  }

  render() {
    const { isEnable } = this.state;
    const { changeValue, goToMain } = this;
    return (
      <>
        <section className="login">
          <h1 className="login-logo">Westagram</h1>
          <div className="login-wrap">
            <form action="#!" onKeyUp={changeValue}>
              <input className="id-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input className="pw-input" type="password" placeholder="비밀번호" />
              <button className={'login-btn ' + (isEnable ? 'enabled-login-btn' : 'disabled-login-btn')}
                onClick={goToMain}
                readOnly>로그인</button>
            </form>
            <a href="#!" className="find-password">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </>
    )
  }
}