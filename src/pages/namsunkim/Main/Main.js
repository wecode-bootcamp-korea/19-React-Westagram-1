import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Story from '../Story/Story';
import Feed from '../Feed/Feed';
import Recommend from '../Recommend/Recommend';
import './Main.scss';

export default class Main extends Component {

  render() {
    return (
      <>
        <Nav />
        <section className="main-feed">
          <section className="feeds">
            <Story />
            <Feed />
          </section>
          <Recommend />
        </section>
      </>
    )
  }
}