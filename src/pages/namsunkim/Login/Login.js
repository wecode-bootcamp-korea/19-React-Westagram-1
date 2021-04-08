import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      isEnable: false,
    }
  }

  changeValue = (e) => {
    const { value, name } = e.target;
    const { validation } = this;
    this.setState(
      {
        [name]: value
      },
      validation
    );
  };

  validation = () => {
    const { id, password, isEnable } = this.state;
    this.setState(
      {
        isEnable: (id && id.includes('@')) && password.length >= 5
      }
    )
  }

  goToMain = (e) => {
    e.preventDefault();
    const { id, password, isEnable } = this.state;
    const { history } = this.props;
    (id && password) && history.push('/mainns');
    // this.login();
  }

  // login = () => {
  //   const { id, password } = this.state;
  //   const { history } = this.props;

  //   fetch('http://10.58.4.176:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: id,
  //       password: password
  //     })

  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { message, token, user_email } = data;

  //       if (message === 'SUCCESS') {
  //         history.push('/mainns');
  //         localStorage.setItem('token', token);
  //         localStorage.setItem('userName', user_email);
  //       } else {
  //         alert('로그인 실패');
  //       }
  //     })
  // }

  render() {
    const { isEnable } = this.state;
    const { changeValue, goToMain } = this;
    return (
      <>
        <section className="login">
          <h1 className="logo">Westagram</h1>
          <div className="loginWrap">
            <form onKeyUp={changeValue}>
              <input className="idInput" type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input className="pwInput" type="password" name="password" placeholder="비밀번호" />
              <button className={'loginBtn ' + (isEnable ? 'enabledBtn' : 'disabledBtn')}
                onClick={goToMain}
                readOnly>로그인</button>
            </form>
            <a href="#!" className="findPassword">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </>
    )
  }
}