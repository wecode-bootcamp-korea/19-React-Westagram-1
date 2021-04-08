import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          {RIGHT_FOOTER.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
        <p className="made">© 2021 INSTAGRAM FROM doheekim</p>
      </footer>
    );
  }
}

export default Footer;

const RIGHT_FOOTER = [
  "소개",
  "도움말",
  "홍보 센터",
  "API",
  "채용정보",
  "개인정보처라방침",
  "약관",
  "위치",
  "인기 계정",
  "해쉬태그",
];
