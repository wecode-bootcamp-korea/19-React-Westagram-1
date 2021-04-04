import React, { Component } from 'react';
import { defaultUser, apiPrefix, feedUrlPrefix, profileUrlPrefix } from '../config';
import FeedIcon from './Components/FeedIcon';
import CommentList from './Components/CommentList';
import './Feed.scss';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      feedArr: []
    }
  }

  componentDidMount() {
    fetch(`${apiPrefix}feedData.json`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedArr: data,
        });
      });
  }

  //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!
  addComment = (comment, id) => {

    console.log(`comment: ${comment}`);
    console.log(`id: ${id}`);
    const { feedArr } = this.state;

    if (comment) {
      this.setState({

        feedArr: [
          feedArr[id - 1].commentArr = [...feedArr[id - 1].commentArr, {
            id: feedArr[id - 1].commentArr.length + 1,
            userName: defaultUser.userName,
            content: comment,
            isLiked: false,
          }]
        ],
        comment: ''
      },
        // () => { console.log(feedArr.commentArr) }
      );
    }
  }

  render() {
    const { feedArr } = this.state;
    const { userName } = this.props;
    return (
      <>
        {
          feedArr.map((feedArr) => {
            return (
              <article className="feed" key={feedArr.id}>
                <div className="feedNav">
                  <img alt={feedArr.userName + '님의 profile'} className="profileImg"
                    src={profileUrlPrefix + feedArr.profileImg} />
                  <div className="idWrap bold">
                    <a href="#!" className="black">{feedArr.userName}</a>
                    <i className="xi-ellipsis-h"></i>
                  </div>
                </div>
                <img alt={feedArr.userName + '님의 feed image'} className="feedImg"
                  src={feedUrlPrefix + feedArr.feedImg}
                />
                <div className="feedContent">
                  <FeedIcon />
                  <section className="likeList">
                    <img className="profileImg"
                      src={profileUrlPrefix + feedArr.likeList[0].profile}
                      alt={feedArr.likeList[0].userName + '님의 profile'} />
                    <span>
                      <a href="#!" className="bold black">{feedArr.likeList[0].userName}</a>님
                      <a href="#!" className="bold black">외 {feedArr.likeList.length - 1}명</a>이 좋아합니다
                    </span>
                  </section>
                  <section className="feedArticle">
                    <span>
                      <a href="#!" className="bold black">{feedArr.userName}</a>
                      <span>{feedArr.content}</span>
                    </span>
                    <p>
                      <span>댓글 {feedArr.commentArr.length}개 모두 보기</span>
                    </p>
                  </section>
                  <CommentList commentArr={feedArr.commentArr} userName={userName} />
                  {/* <Reply commentArr={feedArr.commentArr} addComment={this.addComment} id={feedArr.id} /> */}
                </div>
              </article>
            )
          })
        }
      </>
    )
  }
}