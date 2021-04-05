import React, { Component } from 'react';
import { icons } from '../../../icons';
import './FeedIcon.scss';

export default class FeedIcon extends Component {

  constructor() {
    super();
    const { createIconMenu } = this;
    this.state = {
      icons: [
        createIconMenu(1, icons.like),
        createIconMenu(2, icons.comment),
        createIconMenu(3, icons.share),
        createIconMenu(4, icons.save),
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