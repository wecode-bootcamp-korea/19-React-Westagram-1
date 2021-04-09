import React, { Component } from 'react';
import { defaultUser, prefix } from '../../../config';
import { icons } from '../../../icons';
import { Link } from 'react-router-dom';
import './NavProfile.scss';

const { profile, profileSave, setting, change } = icons;
const MENU_CATEGORY = [
  { name: '프로필', pathUrl: profile },
  { name: '저장됨', pathUrl: profileSave },
  { name: '설정', pathUrl: setting },
  { name: '계정전환', pathUrl: change },
]

export default class NavProfile extends Component {

  constructor() {
    super();

    this.state = {
      isProfileClick: false,
    }
  }

  profileClick = () => {
    this.setState(current => (
      {
        isProfileClick: !current.isProfileClick
      }
    ));
  }

  render() {
    const { isProfileClick } = this.state;
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
                {MENU_CATEGORY.map((category, index) => {
                  const { name, pathUrl } = category;
                  return (
                    <li className="light" key={index}>
                      <svg viewBox="0 0 32 32">
                        <path
                          d={pathUrl}>
                        </path>
                      </svg>
                      <div>
                        <a href="#!" className="black">{name}</a>
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