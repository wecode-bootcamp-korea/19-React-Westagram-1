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

  goToMain = () => {
    const { id, password, isEnable } = this.state;
    const { history } = this.props;
    (id && password) && history.push('/mainns');
  }

  render() {
    const { isEnable } = this.state;
    const { changeValue, goToMain } = this;
    return (
      <>
        <section className="login">
          <h1 className="logo">Westagram</h1>
          <div className="loginWrap">
            <form action="#!" onKeyUp={changeValue}>
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