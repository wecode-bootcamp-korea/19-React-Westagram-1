import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Recommends from '../Recommends/Recommends';
import COMMENT_INFO from '../mockdata/CommentData';
import Feed from './Feed';
import FEED_DATA from '../mockdata/FeedData';
import './Main.scss';

class MainMJ extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      replies: [],
      commentList: [],
      commentValue: '',
      feedList: [],
    };
  }

  componentDidMount() {
    this.setState({
      commentList: COMMENT_INFO,
      feedList: FEED_DATA,
    });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="body">
        <Nav />
        <section className="main">
          <article>
            {feedList.map((feed) => (
              <Feed
                key={feed.id}
                userName={feed.userName}
                img={feed.img}
                content={feed.content}
                feedimg={feed.feedimg}
                subname={feed.subname}
              />
            ))}
          </article>
          <Recommends />
        </section>
      </div>
    );
  }
}

export default MainMJ;
