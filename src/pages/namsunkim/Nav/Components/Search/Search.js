import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Search;