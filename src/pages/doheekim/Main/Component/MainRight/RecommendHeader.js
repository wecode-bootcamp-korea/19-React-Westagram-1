import React from "react";
import "./RecommendHeader.scss";

class RecommendHeader extends React.Component {
  render() {
    return (
      <ul className="recommend-header">
        <li>
          <ul className="recommend-header-flex">
            <li>
              <img
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603"
                alt="프로필이미지"
              />
            </li>
            <li>
              <p className="recommend-header-id">_dodo_hee</p>
            </li>
          </ul>
        </li>
        <li className="log-out recommend-blue">전환</li>
      </ul>
    );
  }
}

export default RecommendHeader;
