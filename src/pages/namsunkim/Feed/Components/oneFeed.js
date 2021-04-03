import React, { Component } from 'react';
import './oneFeed.scss';

export default class oneFeed extends Component {
  render() {
    return (
      <>
        <article className="feed">
          <div className="feed-nav">
            <img alt="profile-img" className="profile-img"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/137255047_1000732240416118_2803328627797788827_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=5hYaOkfYH9MAX9naMcr&amp;ccb=7-4&amp;oh=8dc7e35940e77eab51ae89749939f0d4&amp;oe=608113A9" />
            <div className="id-wrap bold">
              <a href="#!" className="black">log_tattoo</a>
              <i className="xi-ellipsis-h"></i>
            </div>
          </div>
          <img alt="feed-img" className="feed-img"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/163010052_188310122855976_424513987909883173_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vuQ_AqZ6ZnwAX-yykH9&ccb=7-4&oh=020db122260ac76ceef54abbd8f2bc3e&oe=60855A48&_nc_sid=7b02f1"
            style={{ objectFit: "cover" }} />
          <div className="feed-content">
            <FeedIcon />
            <section className="like-list">
              <img className="profile-img"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/18947565_448326618857685_8479464545633435648_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=m4X1SMYXvpMAX8nMy7e&ccb=7-4&oh=edf81851a6509c867b388fd009961a28&oe=60810516"
                alt="profile" />
              <span>
                <a href="#!" className="bold black">_yeoreum__</a>님
                <a href="#!" className="bold black">외 9209명</a>이 좋아합니다
              </span>
            </section>
            <section className="feed-article">
              <span>
                <a href="#!" className="bold black">log_tattoo</a>
                <span>🌳</span>
              </span>
              <p>
                <span>댓글 9개 모두 보기</span>
              </p>
            </section>
            <Reply />
          </div>
        </article>
      </>
    );
  }
}