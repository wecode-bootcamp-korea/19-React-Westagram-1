import React, { Component } from 'react';
import { defaultUser, apiPrefix } from '../../../config';
import { icons } from '../../../icons';
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
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
    fetch(`${apiPrefix}commentData.json`, {
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
        // () => { console.log(commentArr) }
      );
    }
  }

  likeFnc = (id) => {
    const { commentArr } = this.state;

    this.setState(
      ({ prevState }) =>
        commentArr[id - 1].isLiked = (!commentArr[id - 1].isLiked)
    );
  }

  deleteFnc = (id) => {
    const { commentArr } = this.state;

    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      this.setState({
        commentArr: commentArr.filter((comment) => comment.id !== id)
      },
        // () => { console.log(this.state.commentArr) }
      )
    }
  }


  render() {
    const { comment, isEnable, commentArr } = this.state;
    const { likeFnc, deleteFnc, addComment, changeValue } = this;
    // const { commentArr, addComment, id } = this.props;

    return (
      <>
        <ul className="commentList">
          {commentArr.map((commentArr) => {
            const { id, userName, content, isLiked } = commentArr;
            return (
              <Comment
                key={id}
                id={id}
                userName={userName}
                comment={content}
                isLiked={isLiked}
                likeFnc={likeFnc}
                deleteFnc={deleteFnc}
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
