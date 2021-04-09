import React, { Component } from 'react';
import { defaultUser, prefix } from '../../../config';
import Comment from '../Comment/Comment';
import AddComment from '../AddComment/AddComment';
import './CommentList.scss';

export default class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentArr: [],
      isEnable: false,
    }
  }

  componentDidMount() {
    const { api } = prefix;
    fetch(`${api}/commentData.json`)
      .then(res => res.json())
      .then(commentData => {
        this.setState({
          commentArr: commentData,
        });
      });
  }

  changeValue = (e) => {
    const { value } = e.target;
    const { validation, addComment } = this;
    this.setState(
      {
        comment: value.trim()
      },
      validation
    );

    if (e.key === 'Enter') {
      addComment();
      e.target.value = '';
    }
  };

  validation = () => {
    const { comment } = this.state;
    this.setState(
      {
        isEnable: comment.trim()
      }
    )
  }

  addComment = (e) => {
    const { comment, commentArr } = this.state;
    const { userName } = this.props;
    const { name } = defaultUser;

    if (comment) {
      this.setState({
        commentArr: [...commentArr, {
          id: commentArr.length + 1,
          userName: userName === 'undefined' ? name : userName,
          content: comment,
          isLiked: false,
        }],
        comment: ''
      },
      );
    }
  }

  likeComment = (id) => {
    const { commentArr } = this.state;

    this.setState(() =>
      commentArr[id - 1].isLiked = (!commentArr[id - 1].isLiked)
    );
  }

  deleteComment = (id) => {
    const { commentArr } = this.state;

    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      this.setState({
        commentArr: commentArr.filter((comment) => comment.id !== id)
      },
      )
    }
  }

  render() {
    const { comment, isEnable, commentArr } = this.state;
    const { likeComment, deleteComment, addComment, changeValue } = this;

    return (
      <>
        <ul className="commentList">
          {commentArr.map(comment => {
            const { id } = comment;
            return (
              <Comment
                key={id}
                commentArr={comment}
                likeComment={likeComment}
                deleteComment={deleteComment}
              />
            )
          })}
        </ul>
        <AddComment
          changeValue={changeValue}
          isEnable={isEnable}
          comment={comment}
          addComment={addComment}
        />
      </>
    );
  }
}
