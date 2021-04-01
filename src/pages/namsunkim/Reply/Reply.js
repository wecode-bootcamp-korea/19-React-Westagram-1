import React, { Component } from 'react';
import OneReply from './Components/oneReply';
import './Reply.scss';

//userid
const USER_ID = 'usnuuh';

export default class reply extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentArr: [],
      isEnable: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/namsunkim/commentData.json', {
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
    this.setState(
      {
        comment: value.trim()
      },
      this.validation
    );

    if (e.key === 'Enter') {
      this.addComment();
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

    if (comment) {
      this.setState({
        commentArr: [...commentArr, {
          id: commentArr.length + 1,
          userName: USER_ID,
          content: comment,
          isLiked: false,
        }],
        comment: ''
      },
        // () => { console.log(commentArr) }
      );
    }
  }

  like = (id) => {
    const { commentArr } = this.state;

    this.setState(
      ({ prevState }) =>
        commentArr[id - 1].isLiked = (!commentArr[id - 1].isLiked)
    );
  }

  delete = (id) => {
    const { commentArr } = this.state;

    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      this.setState({
        commentArr: commentArr.filter((comment) => comment.id !== id)
      })
    }
  }


  render() {
    const { comment, isEnable, commentArr } = this.state;

    return (
      <>
        <ul className="reply-list">
          {commentArr.map((commentArr) => {
            return (
              <OneReply
                key={commentArr.id}
                id={commentArr.id}
                userName={commentArr.userName}
                comment={commentArr.content}
                isLiked={commentArr.isLiked}
                likeFnc={this.like}
                deleteFnc={this.delete}
              />
            )
          })}

        </ul>
        <section className="add-comment">
          <svg viewBox="0 0 48 48">
            <path
              d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
            </path>
            <path
              d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
            </path>
          </svg>
          <input type="text" className="input-comment" placeholder="댓글 달기..." onChange={this.changeValue} value={comment} onKeyUp={this.changeValue} />
          <button className={isEnable ? 'enabled-add-comment-btn' : 'disabled-add-comment-btn'}
            disabled={!isEnable} onClick={this.addComment}>게시</button>
        </section>
      </>
    );
  }
}
