import React, { Component } from 'react';
import './oneReply.scss';

export default class OneReply extends Component {

  render() {
    const { userName, comment, isLiked, likeFnc, deleteFnc, id } = this.props;

    return (
      <>
        <li>
          <a href="#!" className="bold black">{userName}</a>
          <span>{comment}</span>
          <i className="xi-close-min delete-reply pointer"
            onClick={() => deleteFnc(id)}></i>
          <i className={'xi-heart' + (!isLiked ? '-o' : ' reply-like') + ' like-heart pointer'}
            onClick={() => likeFnc(id)}></i>
        </li>
      </>
    );
  }
}