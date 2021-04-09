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

    fetch(`${api}/feedData.json`)
      .then(res => res.json())
      .then(feedData => {
        this.setState({
          feedArr: feedData,
        });
      });

    //백이랑 토큰 주고 받아서 업로드처리하는 코드
    // fetch('http://10.58.2.138:8000/feed/postfeed', {
    //   method: "POST",
    //   headers: {
    //     'Authorization': localStorage.getItem('token')
    //   },
    //   body: JSON.stringify({
    //     // user: 'namsun@naver.com',
    //     images: 'https://media.vlpt.us/images/nsunny0908/post/692247c4-168f-46b3-8a3f-a7f6d2574762/%F0%9F%92%BB_Algorithm.png?w=768'
    //   })
    // }).then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   }
    //   )
  }

  render() {
    const { feedArr } = this.state;
    const { feeds, profile } = prefix;
    return (
      <>
        {
          feedArr.map(feed => {
            const { id, userName, profileImg, feedImg, content, likeList, commentArr } = feed;
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
                  src={feeds + feedImg} />
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