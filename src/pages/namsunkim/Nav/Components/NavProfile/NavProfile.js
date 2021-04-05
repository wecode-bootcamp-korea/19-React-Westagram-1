import React, { Component } from 'react';
import { defaultUser, prefix } from '../../../config';
import { icons } from '../../../icons';
import { Link } from 'react-router-dom';
import './NavProfile.scss';

export default class NavProfile extends Component {

  constructor() {
    super();
    const { createMenuCategory } = this;
    this.state = {
      isProfileClick: false,
      menuCategory: [
        createMenuCategory(1, '프로필', icons.profile),
        createMenuCategory(2, '저장됨', icons.profileSave),
        createMenuCategory(3, '설정', icons.setting),
        createMenuCategory(4, '게정전환', icons.change),
      ]
    }
  }

  createMenuCategory = (id, categoryName, pathUrl) => {
    return { id, categoryName, pathUrl };
  }

  profileClick = () => {
    const { isProfileClick } = this.state;
    this.setState(current => (
      {
        isProfileClick: !current.isProfileClick
      }
    ));
  }

  render() {
    const { isProfileClick, menuCategory } = this.state;
    const { profileClick } = this;
    const { profile } = prefix;
    return (
      <>
        <div className="profileWrap">
          <a href="#!" onClick={profileClick}>
            <img alt={defaultUser.userName + `님의 profile`} className="profileImg"
              src={profile + defaultUser.profile} />
          </a>
          <div className={'profileMenuWrap' + (!isProfileClick ? ' hidden' : '')}>
            <div className="speechBubble">
            </div>
            <div className="profileMenu">
              <ul className="profileList bold">
                {menuCategory.map((category) => {
                  const { id, pathUrl, categoryName } = category;
                  return (
                    <li className="light" key={id}>
                      <svg viewBox="0 0 32 32">
                        <path
                          d={pathUrl}>
                        </path>
                      </svg>
                      <div>
                        <a href="#!" className="black">{categoryName}</a>
                      </div>
                    </li>
                  )
                })}
                {/* <li className="light">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M10.3 10.7c0-.8-.7-1.5-1.5-1.5H4.9C7.2 5.4 11.4 3 16 3c3.6 0 7 1.5 9.5 4.1.5.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-3-3.2-7.3-5-11.7-5C10.7 0 6 2.5 3 6.7V3.5C3 2.7 2.3 2 1.5 2S0 2.7 0 3.5v7.2c0 .8.7 1.5 1.5 1.5h7.3c.8 0 1.5-.6 1.5-1.5zm20.2 9.1h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.8C24.8 26.6 20.6 29 16 29c-3.6 0-7-1.5-9.5-4.1-.5-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1 3 3.2 7.3 5 11.7 5 5.3 0 10-2.5 13-6.7v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.2c0-.8-.7-1.4-1.5-1.4z">
                    </path>
                  </svg>
                  <div>
                    <Link to="/loginns" className="black">
                      계정전환
                    </Link>
                  </div>
                </li> */}
                <Link to="/loginns" className="black">
                  <li className="logout pointer">
                    로그아웃
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}