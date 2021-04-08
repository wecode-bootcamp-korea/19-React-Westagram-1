import { Component } from "react"; // named export vs. default export
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";

class LoginJW extends Component {
  constructor() {
    super();
    this.state = {
      inputId: "",
      inputPw: "",
      disabled: true,
    };
  }

  goToMain = () => {
    fetch("http://10.58.4.109:8000/accounts/signin", {
      method: "POST",
      body: JSON.stringify({
        user: this.state.inputId,
        password: this.state.inputPw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Check your password") {
          alert("비밀번호");
        }
        if (data.message === "Check your ID") {
          alert("아이디");
        }
        if (data.message === "Success!") {
          console.log(data.message);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id); //토큰값을 localStorage에 저장
          alert("맞당");
          this.props.history.push("/mainjw");
        }
      });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //구조분해할당 전
  // handleInput = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  render() {
    const { inputId } = this.state;
    const { inputPw } = this.state;
    return (
      <div className="loginJW">
        <div className="main_box">
          <h3 className="main_text">Westagram</h3>
          <div className="login_id">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="inputId"
              value={inputId}
              //value={this.state.inputId}
              onChange={this.handleInput}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              placeholder="비밀번호"
              name="inputPw"
              value={inputPw}
              //value={this.state.inputPw}
              onChange={this.handleInput}
            />
          </div>
          <button
            className="loginBtn"
            // 클래스명으로 함수의 결과 표현
            // className={
            //   this.state.inputId.includes("@") && this.state.inputPw.length >= 5
            //     ? "btnActive"
            //     : "btnDisabled"
            // }
            disabled={
              inputId.includes("@") && inputPw.length >= 5 ? false : true
              //구조분해 할당 전
              //this.state.inputId.includes("@") && this.state.inputPw.length >= 5
            }
            onClick={this.goToMain}
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
