import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() { 
        return ( 
            <footer>
                <ul>
                    <li>소개</li>
                    <li>도움말</li>
                    <li>홍보 센터</li>
                    <li>API</li>
                    <li>채용 정보</li>
                    <li className="after-none">개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>인기 계정</li>
                    <li>해쉬태그</li>
                    <li className="after-none">언어</li>
                </ul>
                <p className="made">© 2021 INSTAGRAM FROM doheekim</p>
            </footer>
         );
    }
}
 
export default Footer;