import React, { Component } from 'react';
import { defaultUser, prefix } from '../config';
import RecommendAccount from './Components/RecommendAccount';
import './MainRight.scss';

export default class MainRight extends Component {

  constructor() {
    super();
    this.state = {
      recommendAccount: [],
    }
  }

  componentDidMount() {
    const { api } = prefix;
    fetch(`${api}recommendAccountData.json`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendAccount: data,
        });
      });
  }

  render() {
    const { recommendAccount } = this.state;
    const { userName } = this.props;
    const { profile } = prefix;

    return (
      <>
        <aside className="mainRight">
          <div className="account">
            <img src={profile + defaultUser.profile}
              alt={userName + "님의 profile"} />
            <div className="idWrap bold">
              <span>{userName ? userName : defaultUser.userName}</span>
              <a href="#!">전환</a>
            </div>
          </div>
          <ul className="recommendList bold">
            <span className="recommendForUser">
              <span>회원님을 위한 추천</span>
              <a href="#!" className="black">모두 보기</a>
            </span>
            {recommendAccount.map((recommendAccount) => {
              const { id, userName, imgSrc } = recommendAccount;
              return (
                <RecommendAccount
                  key={id}
                  userName={userName}
                  imgSrc={imgSrc}
                />
              )
            })}
          </ul>
        </aside>
      </>
    );
  }
}
