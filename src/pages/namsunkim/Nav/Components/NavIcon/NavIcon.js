import React, { Component } from 'react';
import { icons } from '../../../icons';
import NavProfile from '../NavProfile/NavProfile';
import './NavIcon.scss';

const { home, share, find, like } = icons;
const ICONS = [home, share, find, like];

export default class NavIcon extends Component {

  render() {
    return (
      <>
        <div className="iconWrap">
          {ICONS.map((pathUrl, index) => {
            return (
              <a href="#!" key={index}>
                <svg className="navIcon" viewBox="0 0 48 48">
                  <path
                    d={pathUrl}>
                  </path>
                </svg>
              </a>
            )
          })}
          <NavProfile />
        </div>
      </>
    );
  }
}