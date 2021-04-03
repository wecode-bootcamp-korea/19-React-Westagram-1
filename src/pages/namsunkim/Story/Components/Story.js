import React, { Component } from 'react';
import './Story.scss';

const urlPrefix = 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/';

export default class oneStory extends Component {
  render() {
    const { userName, imgSrc } = this.props;
    return (
      <>
        <li>
          <div className="gradient-wrap">
            <img src={urlPrefix + imgSrc}
              alt={userName + '님의 profile'} />
          </div>
          <p>{userName}</p>
        </li>
      </>
    );
  }
}