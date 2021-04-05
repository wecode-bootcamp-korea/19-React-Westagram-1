import React, { Component } from 'react';
import { icons } from '../../../icons';
import './AddComment.scss';

export default class AddComment extends Component {
  render() {
    const { isEnable, changeValue, comment, addComment } = this.props;
    return (
      <>
        <section className="addComment">
          <svg viewBox="0 0 48 48">
            <path
              d={icons.addCommentBorder}>
            </path>
            <path
              d={icons.addCommentSmile}>
            </path>
          </svg>
          <input type="text" placeholder="댓글 달기..." onChange={changeValue} value={comment} onKeyUp={changeValue} />
          <button className={isEnable ? 'enabledBtn' : 'disabledBtn'}
            disabled={!isEnable} onClick={addComment}>게시</button>
          {/* disabled={!isEnable} onClick={() => { addComment(comment, id) }}>게시</button> */}
        </section>
      </>
    );
  }
}