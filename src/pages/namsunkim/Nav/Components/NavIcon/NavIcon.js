import React, { Component } from 'react';
import { icons } from '../../../icons';
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
            const { id, pathUrl } = icon;
            return (
              <a href="#!" key={id}>
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