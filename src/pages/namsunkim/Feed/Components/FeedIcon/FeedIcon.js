import React, { Component } from 'react';
import { icons } from '../../../icons';
import './FeedIcon.scss';

const { like, comment, share, save } = icons;
const ICONS = [like, comment, share, save];

export default class FeedIcon extends Component {

  render() {
    return (
      <section className="feedIcon">
        {ICONS.map((pathUrl, index) => {
          return (
            <svg viewBox="0 0 48 48" className="navIcon pointer" key={index}>
              <path d={pathUrl}></path>
            </svg>
          )
        })}
      </section>
    );
  }
}