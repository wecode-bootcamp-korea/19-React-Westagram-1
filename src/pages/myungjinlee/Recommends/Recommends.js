import React, { Component } from 'react';
import Friend from './Friend';

class Recommends extends Component {
  state = {
    friendList: [],
  };

  componentDidMount() {
    fetch('/data/friendData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          friendList: data,
        });
      });
  }

  render() {
    return (
      <div className="recommends">
        <section className="main_right">
          <section>
            <ul className="my_id">
              <li className="profile_img_big">
                <img
                  className="profile_img_big"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/12816862_973552952752029_482865845_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1JXUEIY6Dh8AX8CcFE2&ccb=7-4&oh=54b73ca0e0d810e74ea5a8d827bb8434&oe=6084F4AA&_nc_sid=7b02f1"
                  alt=""
                />
              </li>
              <li>
                <div className="id">weAreFriends</div>
                <span className="subname">친구</span>
              </li>
              <li className="option">전환</li>
            </ul>
          </section>
          <section className="recommend">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </section>
          <section>
            <div className="frend">
              {this.state.friendList.map((elm) => (
                <Friend
                  id={elm.id}
                  image={elm.image}
                  nickname={elm.nickname}
                ></Friend>
              ))}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Recommends;
