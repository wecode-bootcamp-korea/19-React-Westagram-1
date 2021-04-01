import React, { Component } from 'react';
import './oneReply.scss';

export default class OneReply extends Component {
  render() {
    const { comment, index, userId } = this.props;
    return (
      <>
        <li>
          <a href="#!" className="bold black">{userId}</a>
          <span>{comment}</span>
          <i className="xi-close-min delete-reply pointer"></i>
          <i className="xi-heart-o like-heart pointer"></i>
        </li>
      </>
    );
  }
}