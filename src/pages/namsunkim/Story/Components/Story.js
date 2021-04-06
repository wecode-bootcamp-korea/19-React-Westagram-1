import React, { Component } from 'react';
import { prefix } from '../../config';
import './Story.scss';

export default class Story extends Component {
  render() {
    const { userName, imgSrc } = this.props;
    const { profile } = prefix;
    return (
      <>
        <li>
          <div className="gradientWrap">
            <img src={profile + imgSrc}
              alt={`${userName}님의 profile`} />
          </div>
          <p>{userName}</p>
        </li>
      </>
    );
  }
}