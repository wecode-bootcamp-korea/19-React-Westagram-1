import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginMJ extends Component {
  constructor() {
    super();
    this.state = {
      targetId: '',
      targetPw: '',
      color: 'black',
    };
  }
  goToMain = () => {
    this.props.history.push('/main');
  };
  handleIdInput = async (e) => {
    // 객체 비구조화할당
    // const {value} = e.target;
    await this.setState({
      targetId: e.target.value,
    });
  };
  handlePwInput2 = async (e) => {
    // let b = e.target.value
    await this.setState({
      targetPw: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="background">
          <div className="login">
            <div className="logo">
              <h1 className="name">westagram</h1>
            </div>
            <input
              value={this.state.target}
              onChange={this.handleIdInput}
              className="id"
              type="text"
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
            />
            <input
              value={this.state.targetpw}
              onChange={this.handlePwInput2}
              className="passward"
              type="password"
              placeholder=" 비밀번호"
            />
            <button
              className="loginBtn"
              onClick={this.goToMain}
              // style={(this.state.checkPw && this.state.checkId)?{backgroundColor:'red'}:{backgroundColor:'black'}}>
              style={{
                backgroundColor:
                  this.state.targetId.includes('@') &&
                  this.state.targetPw.length >= 5
                    ? 'red'
                    : 'black',
              }}
              disabled={
                this.state.targetId.includes('@') &&
                this.state.targetPw.length >= 5
                  ? false
                  : true
              }
            >
              로그인
            </button>
            <div className="findPassword">
              <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginMJ);
