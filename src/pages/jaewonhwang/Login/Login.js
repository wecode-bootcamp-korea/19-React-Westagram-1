import { Component } from "react"; // named export vs. default export
import "./Login.js";
import "./Login.scss";
import { Link, withRouter } from "react-router-dom";

class LoginJW extends Component {
  constructor() {
    super();
    this.state = {
      //key : value
      inputId: "",
      inputPw: "",
      disabled: true, //"#0094f6" : "#0094f64b";
    };
  }

  handleInput = (e) => {
    // console.log(event);
    // console.log(event.target);
    this.setState({
      [e.target.name]: e.target.value,
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
              name="inputId"
              value={this.state.inputId}
              onChange={this.handleInput}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              placeholder="비밀번호"
              name="inputPw"
              value={this.state.inputPw}
              onChange={this.handleInput}
            />
          </div>
          <button
            className="loginBtn"
            // className={
            //   this.state.inputId.includes("@") && this.state.inputPw.length >= 5
            //     ? "btnActive"
            //     : "btnDisabled"
            // }
            disabled={
              this.state.inputId.includes("@") && this.state.inputPw.length >= 5
                ? true
                : false
            }
          >
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
