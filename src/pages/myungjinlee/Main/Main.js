import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Recommends from '../Recommends/Recommends';
import CoomentInfo from '../mockdata/CommentData';
import Feed from './Feed';
import FeedData from '../mockdata/FeedData';
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
      commentList: CoomentInfo,
      feedList: FeedData,
    });
  }

  render() {
    const { feedList } = this.state;
    return (
      <>
        <div className="body">
          <Nav />
          <section className="main">
            <article>
              {feedList.map((feed) => {
                return (
                  <Feed
                    key={feed.id}
                    userName={feed.userName}
                    img={feed.img}
                    content={feed.content}
                    feedimg={feed.feedimg}
                    subname={feed.subname}
                  />
                );
              })}
            </article>
            <Recommends />
          </section>
        </div>
      </>
    );
  }
}

export default MainMJ;
