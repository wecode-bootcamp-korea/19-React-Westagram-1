import React, { Component } from 'react';

class Friend extends Component {
  render() {
    return (
      <div>
        <ul className="friend">
          <li>
            <div className="profile_img">
              <img src={this.props.image} />
            </div>
          </li>
          <li>
            <div className="id">{this.props.nickname}</div>
            <span className="subname">회원님을 팔로우합니다.</span>
          </li>
          <li className="option">팔로우</li>
        </ul>
      </div>
    );
  }
}

export default Friend;
