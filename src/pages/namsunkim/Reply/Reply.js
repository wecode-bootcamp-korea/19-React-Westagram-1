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
        isEnable: comment.trim() ? true : false
      }
    )
  }

  addComment = (e) => {

    // console.log(e.target.parentNode);
    const { comment, commentArr } = this.state;

    if (comment) {
      this.setState({
        commentArr: [...commentArr, { comment }]
      },
        // () => { console.log(commentArr) }
      );
    }
  }


  render() {
    const { isEnable, commentArr } = this.state;

    return (
      <>
        <ul className="reply-list">
          {/* <li>
						<a href="#!" className="bold black">ovenlee.tattoo</a>
						<span className="reply-content">도안 예뻐요!</span>
						<i className="xi-close-min delete-reply pointer"></i>
						<i className="xi-heart-o like-heart pointer"></i>
					</li>
					<li>
						<a href="#!" className="bold black">mealpoke</a>
						<span>짱귀욤</span>
						<i className="xi-close-min delete-reply pointer"></i>
						<i className="xi-heart-o like-heart pointer"></i>
					</li>
					<li>
						<a href="#!" className="bold black">yeoni_drawing</a>
						<span>헐 ㅠㅠㅠㅠ</span>
						<i className="xi-close-min delete-reply pointer"></i>
						<i className="xi-heart-o like-heart pointer"></i>
					</li> */}
          {commentArr.map((comment, index) => {
            return (
              <OneReply
                key={index}
                userId={USER_ID}
                index={index}
                comment={comment.comment}
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
          <input type="text" className="input-comment" placeholder="댓글 달기..." onKeyUp={this.changeValue} />
          <button className={isEnable ? 'enabled-add-comment-btn' : 'disabled-add-comment-btn'}
            disabled={isEnable ? false : true} onClick={this.addComment}>게시</button>
        </section>
      </>
    );
  }
}
