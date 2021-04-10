import React from "react";
import "./RecommendFriends.scss";

const Friend_Follow = [
  {
    id: 1,
    userId: "hopemusic",
    follow: "_dodo_hee님 외 8명이 팔로우합니다",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/97360706_264499871365487_5373981785061326848_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggVf-M4NbYsAX_hd85m&edm=ALlQn9MAAAAA&ccb=7-4&oh=86f2fa587bbe5a7783c873ae8dbf1a90&oe=60894E45&_nc_sid=48a2a6",
  },
  {
    id: 2,
    userId: "_ggul_dodo",
    follow: "_dodo_hee님 외 8명이 팔로우합니다",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/133598051_2870803729863887_9089010213067629145_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ALWGp6KsmsoAX9qYsg6&edm=ABfd0MgAAAAA&ccb=7-4&oh=240dec582183cfd2551f2cae588e0587&oe=6094B7DD&_nc_sid=7bff83",
  },
  {
    id: 3,
    userId: "_hj__s2",
    follow: "_dodo_hee님 외 3명이 팔로우합니다",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/155278572_167139581887499_4850873868022936954_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CrtwkyUk-4UAX-1R-mi&edm=ABfd0MgAAAAA&ccb=7-4&oh=42dd39a686dc85e51a1db5103a1cda6a&oe=6088F6CE&_nc_sid=7bff83",
  },
  {
    id: 4,
    userId: "cherish_bb",
    follow: "_dodo_hee님 외 10명이 팔로우합니다",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131607260_485328999102785_2325519788938400196_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1sjs607YC1AAX_FDJzD&edm=ABfd0MgAAAAA&ccb=7-4&oh=3f30e05871f35885a90ba82baf15a799&oe=608A943B&_nc_sid=7bff83",
  },
  {
    id: 5,
    userId: "_wecode",
    follow: "_dodo_hee님 외 8명이 팔로우합니다",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VS7U68vXoc8AX_DX1Jh&edm=ANmP7GQAAAAA&ccb=7-4&oh=e845f9d6a9bb6114c4c4a19eb2b9c924&oe=608B6830&_nc_sid=276363",
  },
];

class RecommendFriends extends React.Component {
  render() {
    return (
      <ul className="recommend-friend">
        {Friend_Follow.map((element, index) => {
          return (
            <li className="friend-list" key={index}>
              <ul>
                <li>
                  <img src={element.img} alt="친구프로필" />
                </li>
                <li>
                  <p className="friends-id">{element.userId}</p>
                  <p className="friends-follow">{element.follow}</p>
                </li>
                <li>
                  <p className="follows recommend-blue">팔로우</p>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default RecommendFriends;
