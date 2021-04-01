import React, { Component } from 'react';
import './Feed.scss';
import Reply from '../Reply/Reply';

export default class Feed extends Component {
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
            <section className="feed-icon">
              <svg viewBox="0 0 48 48" className="nav-icon like-btn pointer">
                <path
                  d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
              </svg>
              <svg viewBox="0 0 48 48" className="nav-icon reply-btn pointer">
                <path clipRule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  fillRule="evenodd"></path>
              </svg>
              <svg viewBox="0 0 48 48" className="nav-icon pointer">
                <path
                  d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                </path>
              </svg>
              <svg viewBox="0 0 48 48" className="nav-icon pointer">
                <path
                  d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
                </path>
              </svg>
            </section>
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