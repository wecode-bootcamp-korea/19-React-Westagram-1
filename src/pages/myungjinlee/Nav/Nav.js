import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left">
            <i className="fab fa-instagram"></i>instargram
          </div>
          <div className="mid">
            <input type="text" placeholder="검색" />
          </div>
          <div className="right">
            <ul>
              <li className="icon">
                <img
                  className="icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt="나침반"
                />
              </li>
              <li className="icon">
                <img
                  className="icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="하트"
                />
              </li>
              <li className="icon">
                <img
                  className="icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="사람"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
