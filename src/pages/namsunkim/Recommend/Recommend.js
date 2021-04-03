import React, { Component } from 'react';
import RecommendAccount from './Components/RecommendAccount';
import './Recommend.scss';

export default class Recommend extends Component {

  constructor() {
    super();
    this.state = {
      recommendAccount: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/namsunkim/recommendAccountData.json', {
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

    return (
      <>
        <aside className="main-right">
          <div className="account">
            <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/21042108_123408488308642_162793317946359808_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Ucb42Uat1L4AX_hM_9c&ccb=7-4&oh=2e9b3750947301d942c84e83c0de7421&oe=6083A396"
              alt="profile" />
            <div className="id-wrap bold">
              <span>usnuuh</span>
              <a href="#!">전환</a>
            </div>
          </div>
          <ul className="recommend-list bold">
            <span className="recommend-for-user">
              <span>회원님을 위한 추천</span>
              <a href="#!" className="black">모두 보기</a>
            </span>
            {recommendAccount.map((recommendAccount) => {
              return (
                <RecommendAccount
                  key={recommendAccount.id}
                  userName={recommendAccount.userName}
                  imgSrc={recommendAccount.imgSrc}
                />
              )
            })}
          </ul>
        </aside>
      </>
    );
  }
}