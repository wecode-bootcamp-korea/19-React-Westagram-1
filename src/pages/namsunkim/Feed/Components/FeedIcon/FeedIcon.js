import React, { Component } from 'react';
import { icons } from '../../../icons';
import './FeedIcon.scss';

export default class FeedIcon extends Component {

  constructor() {
    super();
    const { createIconMenu } = this;
    const { like, comment, share, save } = icons;
    this.state = {
      icons: [
        { id: 1, pathUrl: like },
        { id: 2, pathUrl: comment },
        { id: 3, pathUrl: share },
        { id: 4, pathUrl: save },
      ]
    }
  }

  render() {
    const { icons } = this.state;
    return (
      <>
        <section className="feedIcon">
          {icons.map(icon => {
            const { id, pathUrl } = icon;
            return (
              <svg viewBox="0 0 48 48" className="navIcon pointer" key={id}>
                <path d={pathUrl}></path>
              </svg>
            )
          })}
        </section>
      </>
    );
  }
}