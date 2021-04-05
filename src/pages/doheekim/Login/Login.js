import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  goToMain = () => {
    this.props.history.push("/maindh");
  };

  handleIdInput = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      pw: event.target.value,
    });
  };

  btnChangeColor = () => {
    return this.state.id.includes("@") && this.state.pw.length >= 5
      ? "on"
      : "off";
  };

  render() {
    return (
      <>
        <div className="login-wrap">
          <h1 className="title">Westagram</h1>
          <div className="inner-wrap">
            <input
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
              value={this.state.id}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
              value={this.state.pw}
            />
            <button className={this.btnChangeColor()} onClick={this.goToMain}>
              로그인
            </button>
            <p>
              <Link to="/Main">비밀번호를 잊으셨나요?</Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);

//객체 구조 분해 할당

//const { fontState} = this.state
