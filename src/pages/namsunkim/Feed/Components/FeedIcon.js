import React, { Component } from 'react';
import { icons } from '../../config';
import './FeedIcon.scss';

export default class FeedIcon extends Component {

  constructor() {
    super();
    this.state = {
      icons: [
        {
          id: 1,
          pathUrl: icons.like
        },
        {
          id: 2,
          pathUrl: icons.comment
        },
        {
          id: 3,
          pathUrl: icons.share
        },
        {
          id: 4,
          pathUrl: icons.save
        },
      ]
    }
  }
  render() {
    const { icons } = this.state;
    return (
      <>
        <section className="feedIcon">
          {icons.map((icon) => {
            const { id, pathUrl } = icon;
            return (
              <svg viewBox="0 0 48 48" className="navIcon pointer" key={id}>
                <path
                  d={pathUrl}>
                </path>
              </svg>
            )
          })}
        </section>
      </>
    );
  }
}