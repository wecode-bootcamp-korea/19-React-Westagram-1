import React, { Component } from 'react';
import { icons } from '../../../config';
import NavProfile from '../NavProfile/NavProfile';
import './NavIcon.scss';

export default class NavIcon extends Component {

  constructor() {
    super();
    this.state = {
      icons: [
        {
          id: 1,
          pathUrl: icons.home
        },
        {
          id: 2,
          pathUrl: icons.share
        },
        {
          id: 3,
          pathUrl: icons.find
        },
        {
          id: 4,
          pathUrl: icons.like
        },
      ]
    }
  }
  render() {
    const { icons } = this.state;
    return (
      <>
        <div className="iconWrap">
          {icons.map((icon) => {
            return (
              <a href="#!" key={icon.id}>
                <svg className="navIcon" viewBox="0 0 48 48">
                  <path
                    d={icon.pathUrl}>
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