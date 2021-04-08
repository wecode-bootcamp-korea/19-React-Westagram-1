import React from "react";
import "./Story.scss";
import { FaArrowRight } from "react-icons/fa";

const STORY = [
  {
    id: 1,
    userId: "_dodo_hee",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603",
  },
  {
    id: 2,
    userId: "hopthis",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/97360706_264499871365487_5373981785061326848_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggVf-M4NbYsAX_hd85m&edm=ALlQn9MAAAAA&ccb=7-4&oh=86f2fa587bbe5a7783c873ae8dbf1a90&oe=60894E45&_nc_sid=48a2a6",
  },
  {
    id: 3,
    userId: "wooyoon",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/90411415_106597410867352_6969265285440970341_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Uv14-UwMCjsAX-OuhtO&edm=AP_V10EAAAAA&ccb=7-4&oh=2afd63ff33037f32dc7e31519a11a5f4&oe=6094CEA2&_nc_sid=4f375e",
  },
  {
    id: 4,
    userId: "_wecode",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VS7U68vXoc8AX_DX1Jh&edm=ANmP7GQAAAAA&ccb=7-4&oh=e845f9d6a9bb6114c4c4a19eb2b9c924&oe=608B6830&_nc_sid=276363",
  },
  {
    id: 5,
    userId: "_j_vely_s2",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/96585526_534951330529826_957344215958814720_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=NHTFSKNWEoMAX_nppev&edm=ABfd0MgAAAAA&ccb=7-4&oh=40ede10b74522a1ca334f35f0225b3d2&oe=6093BF89&_nc_sid=7bff83",
  },
  {
    id: 6,
    userId: "lee_yaa",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/124292711_206924790788912_3250314279160876441_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iNH7_dYa0-QAX_f28eM&edm=ABfd0MgAAAAA&ccb=7-4&oh=bfc46d589ad78ee04772e13828a7dc8f&oe=6092BB0B&_nc_sid=7bff83",
  },
  {
    id: 7,
    userId: "_yeam_y2",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/128457298_158874082592564_8586621568355192238_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=svxWbzK4kLYAX_w7_gb&edm=ABfd0MgAAAAA&ccb=7-4&oh=583267c4d4b664202a24340ca0506810&oe=608BCB85&_nc_sid=7bff83",
  },
  {
    id: 8,
    userId: "cherish_bb",
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131607260_485328999102785_2325519788938400196_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1sjs607YC1AAX_FDJzD&edm=ABfd0MgAAAAA&ccb=7-4&oh=3f30e05871f35885a90ba82baf15a799&oe=608A943B&_nc_sid=7bff83",
  },
];

class Story extends React.Component {
  render() {
    return (
      <div className="story">
        <ul className="story-wrap">
          {STORY.map((element, index) => {
            return (
              <li className="story-list" key={index}>
                <img src={element.img} alt="프로필이미지" />
                <p className="story-id">{element.userId}</p>
              </li>
            );
          })}
          <div className="next">
            <FaArrowRight />
          </div>
        </ul>
      </div>
    );
  }
}

export default Story;
