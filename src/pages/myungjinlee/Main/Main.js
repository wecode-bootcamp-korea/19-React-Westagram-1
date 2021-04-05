import './Main.scss';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Recommends from '../Recommends/Recommends';
import Comment from './Comment';

class MainMJ extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      replies: [],
    };
  }

  regeistComent = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  inputComment = (e) => {
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
    return (
      <div className="body">
        <Nav />
        <section className="main">
          <article>
            <div className="feed_top">
              <ul className="feed">
                <li className="profile_img">
                  <img className="cat" src="./../../images/cat.jpeg" alt="" />
                </li>
                <div className="name">
                  cat
                  <div className="nameSub">hate Dogs</div>
                </div>
                <li className="feed_right">
                  <i className="fas fa-ellipsis-h"></i>
                </li>
              </ul>
            </div>
            <div className="feed_img">
              <img src="../../images/catcoding.jpg" alt="" />
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
                    <img
                      className="hicat"
                      src="../../images/hicat.jpeg"
                      alt=""
                    />
                  </div>
                  <span className="nickname">
                    Wecode님 외 5명이 좋아합니다.
                  </span>
                  <div className="text">
                    오늘 코딩 시작했어요.개발 묘생 힘들다..벌써 머리 아픈듯.
                    <button>...더 보기</button>
                    <a className="more" href="www.google.com">
                      댓글 12개 모두 더보기
                    </a>
                    <p>
                      dog
                      <a href="www.google.com" className="nickname">
                        @cat
                      </a>
                      오옷..저랑 같이 공부해요!!
                    </p>
                    <p>
                      cat
                      <a href="www.google.com" className="nickname">
                        @dog
                      </a>
                      넹 좋아여
                    </p>
                    <p className="timeago">3일 전</p>
                    <ul className="repliy">
                      {this.state.replies.map((replie) => (
                        <Comment replie={replie} />
                        // this.state.replies를 주면 전체를 다 주는데 배열의 하나의 값만 줘야 되기 때문에 replie를 준다.
                      ))}
                    </ul>
                  </div>
                </section>
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
              </section>
            </div>
          </article>
          <Recommends />
        </section>
      </div>
    );
  }
}

export default MainMJ;
