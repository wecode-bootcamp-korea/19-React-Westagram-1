import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavIcon from './Components/NavIcon/NavIcon';
import Search from './Components/Search/Search';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navBar">
          <div className="navWrap">
            <Link to="/mainns">
              <h1 className="logo">Westagram</h1>
            </Link>
            <Search />
            <NavIcon />
          </div>
        </div>
      </nav>
    );
  }
}