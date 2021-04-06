import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    goToMain = () => {
        this.props.history.push('/mainyw');
    }

    constructor(){
        super();
        this.state = {
            idValue: "",
            pwValue: "",
        }
    }
   
    handleIdInput = (e) => {
        this.setState({
          idValue: e.target.value,  
        });

    }

    handlePwInput = (e) => {
        this.setState({
            pwValue: e.target.value,
        });
        
    }

    enableLoginButton = () => {
       return (this.state.idValue.includes("@") && this.state.pwValue.length >= 5) ? false : true;
    }

    changeLoginButtonStyle = () => {
        return (this.state.idValue.includes("@") && this.state.pwValue.length >= 5) ? 
        "login-button-enabled" : "login-button-disabled"; 
    }
    
    render() {
        return (

            <div className="Login">
                <div className="login-box">
                    <header className="title title-login"> Westagram </header>
                    <form className="login-form">
                        <input className="login-info" onChange={this.handleIdInput} id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input className="login-info" onChange={this.handlePwInput} id="password" type="password" placeholder="비밀번호" />
                        <button className="login-button" disabled={this.enableLoginButton()} id={this.changeLoginButtonStyle()} type="submit" onClick={this.goToMain}>로그인</button>
                    </form>
                    <div className="forgot-password">
                    <a href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);