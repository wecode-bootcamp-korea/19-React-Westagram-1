import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import StoryList from '../Story/StoryList';
import Feed from '../Feed/Feed';
import MainRight from '../MainRight/MainRight';
import './Main.scss';

const userName = localStorage.getItem('userName');

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      userName: userName
    }
  }

  render() {
    return (
      <>
        <Nav />
        <section className="main">
          <section className="feeds">
            <StoryList />
            <Feed userName={userName} />
          </section>
          <MainRight userName={userName} />
        </section>
      </>
    )
  }
}