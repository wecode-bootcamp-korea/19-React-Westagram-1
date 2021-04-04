import React, { Component } from 'react';
import { profileUrlPrefix } from '../../config';
import './Story.scss';

export default class oneStory extends Component {
  render() {
    const { userName, imgSrc } = this.props;
    return (
      <>
        <li>
          <div className="gradientWrap">
            <img src={profileUrlPrefix + imgSrc}
              alt={userName + '님의 profile'} />
          </div>
          <p>{userName}</p>
        </li>
      </>
    );
  }
}