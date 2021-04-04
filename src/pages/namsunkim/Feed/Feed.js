import React, { Component } from 'react';
import FeedIcon from './Components/FeedIcon';
import CommentList from './Components/CommentList';
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
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/18947565_448326618857685_8479464545633435648_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=m4X1SMYXvpMAX8nMy7e&ccb=7-4&oh=edf81851a6509c867b388fd009961a28&oe=60810516"
                      alt={feedArr.likeList[0] + '님의 profile'} />
                    <span>
                      <a href="#!" className="bold black">{feedArr.likeList[0]}</a>님
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