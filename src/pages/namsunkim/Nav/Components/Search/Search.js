import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  render() {
    return (
      <>
        <div className="searchWrap">
          <input type="text" className="searchInput" placeholder="검색" />
          <button className="keywordDelBtn">x</button>
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
      </>
    );
  }
}