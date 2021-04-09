import React, { Component } from 'react';
import './Comment.scss';

export default class Comment extends Component {

  render() {
    const { commentArr, likeComment, deleteComment } = this.props;
    const { id, isLiked, content, userName } = commentArr;

    return (
      <li>
        <a href="#!" className="bold black">{userName}</a>
        <span>{content}</span>
        <i className="xi-close-min deleteComment pointer"
          onClick={() => deleteComment(id)}></i>
        <i className={'xi-heart' + (isLiked ? ' likeComment' : '-o') + ' likeHeart pointer'}
          onClick={() => likeComment(id)}></i>
      </li>
    );
  }
}