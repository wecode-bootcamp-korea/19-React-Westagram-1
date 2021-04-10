import React, { Component } from "react";
import "./CommentBox.scss";
class CommentBox extends Component {
  render() {
    const {
      enterCommentLine,
      commentValue,
      handleCommentValue,
      submitCommentLine,
    } = this.props;

    const enableCommentButton = () => {
      return !commentValue;
    };

    const changeCommentButtonStyle = () => {
      return commentValue
        ? "comments-button-enabled"
        : "comments-button-disabled";
    };

    return (
      <div className="comments-box">
        <input
          onKeyPress={enterCommentLine}
          value={commentValue}
          onChange={handleCommentValue}
          type="text"
          placeholder="댓글 달기..."
        />

        <button
          onClick={submitCommentLine}
          type="submit"
          className="comments-button"
          id={changeCommentButtonStyle()}
          disabled={enableCommentButton()}>
          게시
        </button>
      </div>
    );
  }
}

export default CommentBox;
