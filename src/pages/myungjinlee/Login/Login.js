import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

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
    this.props.history.push('/mainmj');
  };
  handleInput = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value,
    });
  };

  render() {
    const { targetId, targetPw } = this.state;
    return (
      <div>
        <div className="background">
          <div className="login">
            <div className="logo">
              <h1 className="name">westagram</h1>
            </div>
            <input
              value={targetId}
              onChange={this.handleInput}
              className="id"
              type="text"
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
              name="targetId"
            />
            <input
              value={targetPw}
              onChange={this.handleInput}
              className="passward"
              type="password"
              placeholder=" 비밀번호"
              name="targetPw"
            />
            <button
              className="loginBtn"
              onClick={this.goToMain}
              // style={(this.state.checkPw && this.state.checkId)?{backgroundColor:'red'}:{backgroundColor:'black'}}>
              style={{
                backgroundColor:
                  targetId.includes('@') && targetPw.length >= 5
                    ? 'red'
                    : 'black',
              }}
              disabled={
                targetId.includes('@') && targetPw.length >= 5 ? false : true
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
