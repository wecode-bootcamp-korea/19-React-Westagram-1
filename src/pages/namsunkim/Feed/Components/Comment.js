import React, { Component } from 'react';
import './Comment.scss';

export default class Comment extends Component {

  render() {
    const { userName, comment, isLiked, likeFnc, deleteFnc, id } = this.props;

    return (
      <>
        <li>
          <a href="#!" className="bold black">{userName}</a>
          <span>{comment}</span>
          <i className="xi-close-min deleteComment pointer"
            onClick={() => deleteFnc(id)}></i>
          <i className={'xi-heart' + (!isLiked ? '-o' : ' likeComment') + ' likeHeart pointer'}
            onClick={() => likeFnc(id)}></i>
        </li>
      </>
    );
  }
}