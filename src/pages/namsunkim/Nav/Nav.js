import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavIcon from './Components/NavIcon/NavIcon';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="nav-bar">
            <div className="navbar-wrap">
              <Link to="/mainns">
                <h1 className="logo">Westagram</h1>
              </Link>
              <div className="search-wrap">
                <input type="text" className="search-input" placeholder="검색" />
                <button className="keyword-delete-btn hidden">x</button>
                <div className="search-result-wrap hidden">
                  <div className="speech-bubble">
                  </div>
                  <div className="search-result">
                    <ul className="search-list bold">
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <NavIcon />
            </div>
          </div>
        </nav>
      </>
    );
  }
}