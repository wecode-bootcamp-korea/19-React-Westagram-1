import React, { Component } from 'react';
import FeedIcon from './Components/FeedIcon';
import Reply from '../Reply/Reply';
import './Feed.scss';

const profileUrlPrefix = 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/';
const feedUrlPrefix = 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/';
const USER_ID = 'usnuuh';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      feedArr: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/namsunkim/feedData.json', {
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
            userName: USER_ID,
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
    return (
      <>
        {
          feedArr.map((feedArr) => {
            return (
              <article className="feed" key={feedArr.id}>
                <div className="feed-nav">
                  <img alt={feedArr.userName + '님의 profile'} className="profile-img"
                    src={profileUrlPrefix + feedArr.profileImg} />
                  <div className="id-wrap bold">
                    <a href="#!" className="black">{feedArr.userName}</a>
                    <i className="xi-ellipsis-h"></i>
                  </div>
                </div>
                <img alt="feed-img" className="feed-img"
                  src={feedUrlPrefix + feedArr.feedImg}
                />
                <div className="feed-content">
                  <FeedIcon />
                  <section className="like-list">
                    <img className="profile-img"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/18947565_448326618857685_8479464545633435648_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=m4X1SMYXvpMAX8nMy7e&ccb=7-4&oh=edf81851a6509c867b388fd009961a28&oe=60810516"
                      alt="profile" />
                    <span>
                      <a href="#!" className="bold black">{feedArr.likeList[0]}</a>님
                      <a href="#!" className="bold black">외 {feedArr.likeList.length - 1}명</a>이 좋아합니다
                    </span>
                  </section>
                  <section className="feed-article">
                    <span>
                      <a href="#!" className="bold black">{feedArr.userName}</a>
                      <span>{feedArr.content}</span>
                    </span>
                    <p>
                      <span>댓글 {feedArr.commentArr.length}개 모두 보기</span>
                    </p>
                  </section>
                  <Reply commentArr={feedArr.commentArr} />
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