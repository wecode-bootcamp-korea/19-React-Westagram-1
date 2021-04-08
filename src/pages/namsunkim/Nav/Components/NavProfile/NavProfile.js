import React, { Component } from 'react';
import { defaultUser, prefix } from '../../../config';
import { icons } from '../../../icons';
import { Link } from 'react-router-dom';
import './NavProfile.scss';

export default class NavProfile extends Component {

  constructor() {
    super();
    const { createMenuCategory } = this;
    const { profile, profileSave, setting, change } = icons;
    this.state = {
      isProfileClick: false,
      menuCategory: [
        { id: 1, categoryName: '프로필', pathUrl: profile },
        { id: 2, categoryName: '저장됨', pathUrl: profileSave },
        { id: 3, categoryName: '설정', pathUrl: setting },
        { id: 4, categoryName: '계정전환', pathUrl: change },
      ]
    }
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
            <img alt={`${defaultUser.userName}님의 profile`} className="profileImg"
              src={profile + defaultUser.profile} />
          </a>
          <div className={`profileMenuWrap${!isProfileClick ? ' hidden' : ''}`}>
            <div className="speechBubble">
            </div>
            <div className="profileMenu">
              <ul className="profileList bold">
                {menuCategory.map(category => {
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