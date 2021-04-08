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
    //this.props.history.push("/maindh");
    fetch("http://10.58.3.73:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
        // phone_number: "01034358181",
        // name: "김도히",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.MESSAGE === "SUCCESS") {
          alert("로그인성공");
          this.props.history.push("/maindh");
        } else {
          alert("🤬IT'S YOUR FAULT!🤬");
        }
      });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
              onChange={this.handleInput}
              value={this.state.id}
              name="id"
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              value={this.state.pw}
              name="pw"
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
