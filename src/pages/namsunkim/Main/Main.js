import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import StoryList from '../Story/StoryList';
import Feed from '../Feed/Feed';
import MainRight from '../MainRight/MainRight';
import './Main.scss';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      userName: ''
    }
  }

  componentDidMount() {
    this.setState({
      userName: localStorage.getItem('userName')
    })
  }

  render() {
    const { userName } = this.state;
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