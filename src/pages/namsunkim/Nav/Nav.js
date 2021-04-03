import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavIcon from './Components/NavIcon/NavIcon';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="navBar">
            <div className="navWrap">
              <Link to="/mainns">
                <h1 className="logo">Westagram</h1>
              </Link>
              <div className="searchWrap">
                <input type="text" className="searchInput" placeholder="검색" />
                <button className="keywordDelBtn hidden">x</button>
                <div className="searchResultWrap hidden">
                  <div className="speechBubble">
                  </div>
                  <div className="searchResult">
                    <ul className="searchList bold">
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