import React, { Component } from 'react';
import Comment from './Comment';
import Commentbox from './Commentbox';
import CoomentInfo from '../mockdata/CommentData';
import FeedData from '../mockdata/FeedData';
import './Main.scss';
class Feed extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      replies: [],
      commentList: [],
      commentValue: '',
      feedList: [],
      userName: 'wecode',
    };
  }
  componentDidMount() {
    this.setState({
      commentList: CoomentInfo,
      feedList: FeedData,
    });
  }
  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'wecode',
          content: commentValue,
        },
      ],
      commentValue: '',
    });
  };

  regeistComent = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  inputComment = () => {
    const add = this.state.replies;
    add.push(this.state.comment);
    this.setState({
      replies: this.state.replies,
      comment: '',
    });
  };
  PressClick = (e) => {
    this.inputComment();
  };
  pressEnter = (e) => {
    if (e.key === 'Enter') {
      this.inputComment();
    }
  };
  render() {
    const { commentList, feedList } = this.state;
    return (
      <>
        <div className="feed_top">
          <ul className="feed">
            <li className="profile_img">
              <img className="cat" src={this.props.feedimg} alt="" />
            </li>
            <div className="name">
              {this.props.userName}
              <div className="nameSub">{this.props.subname}</div>
            </div>
            <li className="feed_right">
              <i className="fas fa-ellipsis-h"></i>
            </li>
          </ul>
          <div className="feed_img">
            <img src={this.props.img} alt="" />
          </div>
        </div>
        <div className="feed_comment">
          <section className="feed_bottom">
            <ul className="icons">
              <li className="icons_left">
                <i className="fas fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </li>
              <li className="icons_right">
                <i className="far fa-bookmark"></i>
              </li>
            </ul>
            <section className="comment">
              <div className="profile_img_small">
                <img className="hicat" src="" alt="" />
              </div>
              <span className="nickname">Wecode님 외 5명이 좋아합니다.</span>
              <div className="text">
                {this.props.content}
                <button>...더 보기</button>
                <a className="more" href="www.google.com">
                  댓글 12개 모두 더보기
                </a>
              </div>
            </section>
          </section>
          {commentList.map((comment) => {
            return (
              <Commentbox
                key={comment.id}
                name={comment.userName}
                comment={comment.content}
              />
            );
          })}
          <p className="timeago">3일 전</p>
          <ul className="repliy">
            {this.state.replies.map((replie) => (
              <Comment replie={replie} username={this.state.userName} />
              // this.state.replies를 주면 전체를 다 주는데 배열의 하나의 값만 줘야 되기 때문에 replie를 준다.
            ))}
          </ul>
        </div>
        <section className="input">
          <span className="smlie">
            <i className="far fa-smile"></i>
          </span>
          <input
            type="text"
            placeholder="댓글 달기"
            className="cmt"
            onChange={this.regeistComent}
            onKeyPress={this.pressEnter}
            value={this.state.comment}
          />
          <button className="upload" onClick={this.PressClick}>
            게시
          </button>
        </section>
        <div className="term"></div>
      </>
    );
  }
}

export default Feed;
