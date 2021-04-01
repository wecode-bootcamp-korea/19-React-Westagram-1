import React, { Component } from 'react';
import './Recommend.scss';

export default class Recommend extends Component {



  render() {
    return (
      <>
        <aside className="main-right">
          <div className="account">
            <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/21042108_123408488308642_162793317946359808_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Ucb42Uat1L4AX_hM_9c&ccb=7-4&oh=2e9b3750947301d942c84e83c0de7421&oe=6083A396"
              alt="" />
            <div className="id-wrap bold">
              <span>usnuuh</span>
              <a href="#!">전환</a>
            </div>
          </div>
          <ul className="recommend-list bold">
            <span className="recommend-for-user">
              <span>회원님을 위한 추천</span>
              <a href="#!" className="black">모두 보기</a>
            </span>
            <li>
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/52920074_342680189685470_2522083574501343232_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Ngg8941CmwUAX9OPtIJ&ccb=7-4&oh=4f052a8326e107f4f7eade689c53f3a8&oe=6084DCBE&_nc_sid=a9513d"
                alt="profile" />
              <div>
                <a href="#!" className="black">leoposaoe</a>
                <span className="light">회원님을 팔로우합니다</span>
              </div>
              <a href="#!" className="follow">팔로우</a>
            </li>
            <li>
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/40951123_295765164349862_8347291724577505280_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v7bfvNBUY4AX_ag9Fa&ccb=7-4&oh=8f27a38fe97bbfc84053400ff3e8709b&oe=60811063"
                alt="profile" />
              <div>
                <a href="#!" className="black">mom__laam</a>
                <span className="light">회원님을 팔로우합니다</span>
              </div>
              <a href="#!" className="follow">팔로우</a>
            </li>
            <li>
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/40614571_262567011041207_3224183970027536384_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pkCDJRzIYKEAX8tvskG&ccb=7-4&oh=5c09a6684cf2cbbe70f54feb86da578a&oe=608476DC&_nc_sid=57d425"
                alt="profile" />
              <div>
                <a href="#!" className="black">aeniermmm</a>
                <span className="light">회원님을 팔로우합니다</span>
              </div>
              <a href="#!" className="follow">팔로우</a>
            </li>
            <li>
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/37153001_318307945607757_5968933574164873216_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=0iY_01EmLBkAX-MT90z&ccb=7-4&oh=65accebf9c0383ed2ca3d23db889f4fb&oe=6083ACF1&_nc_sid=57d425"
                alt="profile" />
              <div>
                <a href="#!" className="black">atimeleli</a>
                <span className="light">회원님을 팔로우합니다</span>
              </div>
              <a href="#!" className="follow">팔로우</a>
            </li>
            <li>
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/75379853_597689687670129_3946037787731427328_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iOJYD6RjkzsAX8eBysY&ccb=7-4&oh=133bb5e1844eb0cf638ceeb0a78786c5&oe=6084CEE0&_nc_sid=57d425"
                alt="profile" />
              <div>
                <a href="#!" className="black">__have___a___secret</a>
                <span className="light">회원님을 팔로우합니다</span>
              </div>
              <a href="#!" className="follow">팔로우</a>
            </li>
          </ul>
        </aside>
      </>
    );
  }
}
