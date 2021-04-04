import { Component } from "react"; // named export vs. default export
import "./Login.js";
import "./Login.scss";
import { Link, withRouter } from "react-router-dom";

class LoginJW extends Component {
  constructor() {
    super();

    this.state = {
      inputId: "",
      inputPw: "",
    };
  }

  goToMain = () => {
    this.props.history.push("/MainJW");
  };

  handleIdInput = (event) => {
    // console.log(event);
    // console.log(event.target);
    this.setState({
      inputId: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      inputPw: event.target.value,
    });
  };

  render() {
    // console.log(this.state.inputId);
    return (
      <div className="loginJW">
        <div className="main_box">
          <h3 className="main_text">Westagram</h3>
          <div className="login_id">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </div>
          <button className="loginBtn" onClick={this.goToMain}>
            로그인
          </button>
          <p className="btn_p">
            <Link to="/Main">비밀번호를 잊으셨나요?</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginJW);

// handleColor = () => {
//   this.setState({
//     color: 'blue'
//   })
// }

// <h1 style={{ color: this.state.color }}>Class Component | State</h1>
//         <button onClick={this.handleColor}>Click</button>
