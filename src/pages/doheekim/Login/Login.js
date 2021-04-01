import  { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    goToMain = () => {
        this.props.history.push('/main');
    }

    render() { 
        return ( 
            <body>
                <div className="login-wrap">
                    <h1 className="title">Westagram</h1>
                    <div className="inner-wrap">
                        <input className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input className="password" type="password" placeholder="비밀번호" />
                        <button onClick={this.goToMain}>로그인</button>
                        <p><Link to="/Main">비밀번호를 잊으셨나요?</Link></p>
                    </div>
                </div>  
            </body>
         );
    }
}

export default withRouter(Login);
