import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  goToMain = () => {
    this.props.history.push("/mainyw");
  };

  clickLogin = (e) => {
    e.preventDefault();
    fetch("http://10.58.7.60:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          alert("로그인 성공");
          localStorage.setItem("loginInfo", result.token);
          this.goToMain();
        } else {
          alert("로그인 정보를 확인해주세요");
        }
      });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  enableLoginButton = () => {
    const { idValue, pwValue } = this.state;
    return idValue.includes("@") && pwValue.length >= 5;
  };

  changeLoginButtonStyle = () => {
    const { idValue, pwValue } = this.state;
    return idValue.includes("@") && pwValue.length >= 5
      ? "login-button-enabled"
      : "login-button-disabled";
  };

  render() {
    return (
      <div className="Login">
        <div className="login-box">
          <header className="title title-login"> Westagram </header>
          <form className="login-form">
            <input
              name="idValue"
              className="login-info"
              onChange={this.handleInput}
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="pwValue"
              className="login-info"
              onChange={this.handleInput}
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className="login-button"
              disabled={this.enableLoginButton()}
              id={this.changeLoginButtonStyle()}
              type="submit"
              onClick={this.clickLogin}>
              로그인
            </button>
          </form>
          <div className="forgot-password">
            <a href="https://www.instagram.com/accounts/password/reset/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
