import React, { Component } from 'react';
import { prefix } from '../config';
import FeedIcon from './Components/FeedIcon/FeedIcon';
import CommentList from './Components/CommentList/CommentList';
import './Feed.scss';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      feedArr: []
    }
  }

  componentDidMount() {
    const { api } = prefix;

    fetch(`${api}/feedData.json`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedArr: data,
        });
      });
  }

  render() {
    const { feedArr } = this.state;
    const { feed, profile } = prefix;
    return (
      <>
        {
          feedArr.map(feedArr => {
            const { id, userName, profileImg, feedImg, content, likeList, commentArr } = feedArr;
            return (
              <article className="feed" key={id}>
                <div className="feedNav">
                  <img alt={`${userName}님의 profile`} className="profileImg"
                    src={profile + profileImg} />
                  <div className="idWrap bold">
                    <a href="#!" className="black">{userName}</a>
                    <i className="xi-ellipsis-h"></i>
                  </div>
                </div>
                <img alt={`${userName}님의 feedImage`} className="feedImg"
                  src={feed + feedImg} />
                <div className="feedContent">
                  <FeedIcon />
                  <section className="likeList">
                    <img className="profileImg"
                      src={profile + likeList[0].profile}
                      alt={`${likeList[0].userName}님의 profile`} />
                    <span>
                      <a href="#!" className="bold black">{likeList[0].userName}</a>님
                      <a href="#!" className="bold black">외 {likeList.length - 1}명</a>이 좋아합니다
                    </span>
                  </section>
                  <section className="feedArticle">
                    <span>
                      <a href="#!" className="bold black">{userName}</a>
                      <span>{content}</span>
                    </span>
                    <p>
                      <span>댓글 {commentArr.length}개 모두 보기</span>
                    </p>
                  </section>
                  <CommentList commentArr={commentArr} userName={this.props.userName} />
                </div>
              </article>
            )
          })
        }
      </>
    )
  }
}