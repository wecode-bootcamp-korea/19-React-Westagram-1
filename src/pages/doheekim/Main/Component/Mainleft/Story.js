import React from 'react';
import './Story.scss';
import { FaArrowRight } from 'react-icons/fa';

class Story extends React.Component {
    render() { 
        return ( 
            <div className="story">
                <ul className="story-wrap">
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603" alt="프로필이미지"/>
                        <p className="story-id">_dodo_hee</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/97360706_264499871365487_5373981785061326848_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggVf-M4NbYsAX_hd85m&edm=ALlQn9MAAAAA&ccb=7-4&oh=86f2fa587bbe5a7783c873ae8dbf1a90&oe=60894E45&_nc_sid=48a2a6" alt="프로필이미지"/>
                        <p className="story-id">hopthis</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/96585526_534951330529826_957344215958814720_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=DaypD54ex2gAX9jUwS2&edm=ABfd0MgAAAAA&ccb=7-4&oh=94422ddc79f809824ecfd5de9ffbdf79&oe=608911C9&_nc_sid=7bff83" alt="프로필이미지"/>
                        <p className="story-id">wooyoon</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VS7U68vXoc8AX_DX1Jh&edm=ANmP7GQAAAAA&ccb=7-4&oh=e845f9d6a9bb6114c4c4a19eb2b9c924&oe=608B6830&_nc_sid=276363" alt="프로필이미지"/>
                        <p className="story-id">_wecode</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/155180730_424134145319091_2244618473151617561_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jkEKojtr85AAX-RveBi&edm=AOG-cTkAAAAA&ccb=7-4&oh=7f7b1c626d17579c1586680935296ee6&oe=608C1C0B&_nc_sid=282b66" alt="프로필이미지"/>
                        <p className="story-id">_j_vely_s2</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/124292711_206924790788912_3250314279160876441_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Blphx6BRGkEAX9gzl6I&edm=ABfd0MgAAAAA&ccb=7-4&oh=1f2da03b2c6ce52790c8ada747eff759&oe=608B9C8B&_nc_sid=7bff83" alt="프로필이미지"/>
                        <p className="story-id">_lee_yeah</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/128457298_158874082592564_8586621568355192238_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=svxWbzK4kLYAX_w7_gb&edm=ABfd0MgAAAAA&ccb=7-4&oh=583267c4d4b664202a24340ca0506810&oe=608BCB85&_nc_sid=7bff83" alt="프로필이미지"/>
                        <p className="story-id">_yeam_y2</p>
                    </li>
                    <li className="story-list">
                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131607260_485328999102785_2325519788938400196_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1sjs607YC1AAX_FDJzD&edm=ABfd0MgAAAAA&ccb=7-4&oh=3f30e05871f35885a90ba82baf15a799&oe=608A943B&_nc_sid=7bff83" alt="프로필이미지"/>
                        <p className="story-id">cherish_bb</p>
                    </li>
                    <div className="next">
                        <FaArrowRight />
                    </div>
                </ul>
            </div>
         );
    }
}
 
export default Story;