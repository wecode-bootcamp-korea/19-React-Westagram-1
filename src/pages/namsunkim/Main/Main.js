import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import StoryList from '../Story/StoryList';
import Feed from '../Feed/Feed';
import MainRight from '../MainRight/MainRight';
import './Main.scss';

const userId = localStorage.getItem('userId');

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      userId: userId
    }
  }

  render() {
    return (
      <>
        <Nav />
        <section className="main">
          <section className="feeds">
            <StoryList />
            <Feed />
          </section>
          <MainRight userId={userId} />
        </section>
      </>
    )
  }
}