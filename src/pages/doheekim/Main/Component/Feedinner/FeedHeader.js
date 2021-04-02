import React from 'react';
import './FeedHeader.scss';
import { FaEllipsisH } from 'react-icons/fa';

class FeedHeader extends React.Component {
    render() { 
        return ( 
            <ul className="feeds-header">
                <li className="feeds-idwrap">
                    <ul>
                        <li className="mini-profile">
                            <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603" alt="도희미니프로필"/>
                        </li>
                        <li className="mini-id">_dodo_hee</li>
                    </ul>
                </li>
                <li className="more"><FaEllipsisH /></li>
            </ul>
         );
    }
}
 
export default FeedHeader;