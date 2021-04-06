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
        createIconMenu(1, like),
        createIconMenu(2, comment),
        createIconMenu(3, share),
        createIconMenu(4, save),
      ]
    }
  }

  createIconMenu = (id, pathUrl) => {
    return { id, pathUrl };
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
                <path d={pathUrl}></path>
              </svg>
            )
          })}
        </section>
      </>
    );
  }
}