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
    fetch(`${api}commentData.json`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentArr: data,
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
    const { comment, isEnable } = this.state;
    this.setState(
      {
        isEnable: comment.trim()
      }
    )
  }

  addComment = (e) => {
    const { comment, commentArr } = this.state;
    const { userName } = this.props;

    if (comment) {
      this.setState({
        commentArr: [...commentArr, {
          id: commentArr.length + 1,
          userName: userName ? userName : defaultUser.userName,
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

    this.setState(
      ({ prevState }) =>
        commentArr[id - 1].isLiked = (!commentArr[id - 1].isLiked)
    );
  }

  deleteComment = (id) => {
    let { commentArr } = this.state;

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
          {commentArr.map((commentArr) => {
            const { id } = commentArr;
            return (
              <Comment
                key={id}
                commentArr={commentArr}
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
