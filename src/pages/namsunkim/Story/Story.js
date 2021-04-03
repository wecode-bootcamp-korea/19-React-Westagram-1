import React, { Component } from 'react';
import OneStory from './Components/oneStory';
import './Story.scss';

export default class Story extends Component {
  constructor() {
    super();
    this.state = {
      storyArr: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/namsunkim/storyData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyArr: data,
        });
      });
  }

  scroll = (direction) => {
    const instaStoryUl = document.querySelector('.insta-story ul');
    let scrollAmount = 0;

    const slide = setInterval((e) => {

      if (direction === 'left') {
        instaStoryUl.scrollLeft -= 15;
      } else {
        instaStoryUl.scrollLeft += 15;
      }

      scrollAmount += 5;
      if (scrollAmount >= 100) {
        window.clearInterval(slide);
      }
    }, 20);
  }

  render() {
    const { storyArr } = this.state;
    return (
      <>
        <section className="insta-story">
          <div className="scroll-btn-wrap">
            <button className="prev-btn pointer" onClick={() => { this.scroll("left") }}>
              <i className="xi-angle-left-min"></i>
            </button>
            <button className="next-btn pointer" onClick={() => { this.scroll("right") }}>
              <i className="xi-angle-right-min"></i>
            </button>
          </div>
          <ul>
            {storyArr.map((storyArr) => {
              return (
                <OneStory
                  key={storyArr.id}
                  userName={storyArr.userName}
                  imgSrc={storyArr.imgSrc}
                />
              )
            })}
          </ul>
        </section>
      </>
    );
  }
}