import React, { Component } from 'react';
import { apiPrefix } from '../config';
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
    fetch(`${apiPrefix}storyData.json`, {
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
    const prevBtn = document.querySelector('.prevBtn');
    let scrollAmount = 0;

    const slide = setInterval((e) => {

      (instaStoryUl.scrollLeft)
        ? prevBtn.classList.remove('hidden')
        : prevBtn.classList.add('hidden');

      (direction === 'left')
        ? instaStoryUl.scrollLeft -= 15
        : instaStoryUl.scrollLeft += 15;

      scrollAmount += 5;

      (scrollAmount >= 100) && window.clearInterval(slide);
    }, 20);
  }

  render() {
    const { storyArr } = this.state;
    return (
      <>
        <section className="storyList">
          <div className="scrollBtnWrap">
            <button className="prevBtn pointer hidden" onClick={() => { this.scroll("left") }}>
              <i className="xi-angle-left"></i>
            </button>
            <button className="nextBtn pointer" onClick={() => { this.scroll("right") }}>
              <i className="xi-angle-right"></i>
            </button>
          </div>
          <ul>
            {storyArr.map((storyArr) => {
              const { id, userName, imgSrc } = storyArr;
              return (
                <Story
                  key={id}
                  userName={userName}
                  imgSrc={imgSrc}
                />
              )
            })}
          </ul>
        </section>
      </>
    );
  }
}