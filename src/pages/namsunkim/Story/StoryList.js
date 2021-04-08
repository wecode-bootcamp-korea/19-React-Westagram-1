import React, { Component } from 'react';
import { prefix } from '../config';
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
    const { api } = prefix;
    fetch(`${api}/storyData.json`)
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
    const { scroll } = this;
    return (
      <>
        <section className="storyList">
          <div className="scrollBtnWrap">
            <button className="prevBtn pointer hidden" onClick={() => { scroll("left") }}>
              <i className="xi-angle-left"></i>
            </button>
            <button className="nextBtn pointer" onClick={() => { scroll("right") }}>
              <i className="xi-angle-right"></i>
            </button>
          </div>
          <ul>
            {storyArr.map(storyArr => {
              const { id, userName, imgSrc, isClicked } = storyArr;
              if (!isClicked) {
                return (
                  <Story
                    key={id}
                    userName={userName}
                    imgSrc={imgSrc}
                  />
                )
              }
            })}
          </ul>
        </section>
      </>
    );
  }
}