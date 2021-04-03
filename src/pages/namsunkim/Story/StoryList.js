import React, { Component } from 'react';
import Story from './Components/Story';
import './StoryList.scss';

export default class StoryList extends Component {
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
    const instaStoryUl = document.querySelector('.storyList ul');
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
        <section className="storyList">
          <div className="scrollBtnWrap">
            <button className="prevBtn pointer" onClick={() => { this.scroll("left") }}>
              <i className="xi-angle-left-min"></i>
            </button>
            <button className="nextBtn pointer" onClick={() => { this.scroll("right") }}>
              <i className="xi-angle-right-min"></i>
            </button>
          </div>
          <ul>
            {storyArr.map((storyArr) => {
              return (
                <Story
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