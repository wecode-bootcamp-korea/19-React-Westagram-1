import React, { Component } from 'react';
import { profileUrlPrefix } from '../../config';
import './RecommendAccount.scss';

export default class RecommendAccount extends Component {
  render() {

    const { userName, imgSrc } = this.props;
    return (
      <>
        <li className="recommendAccount">
          <img src={profileUrlPrefix + imgSrc}
            alt={userName + '님의 profile'} />
          <div>
            <a href="#!" className="black">{userName}</a>
            <span>회원님을 팔로우합니다</span>
          </div>
          <a href="#!" className="follow">팔로우</a>
        </li>
      </>
    );
  }
}