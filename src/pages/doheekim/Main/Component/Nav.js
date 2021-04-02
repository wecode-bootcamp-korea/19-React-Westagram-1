import React from 'react';
import './Nav.scss';
import { FaSearch } from 'react-icons/fa';

class Nav extends React.Component {
    render() { 
        return ( 
            <nav>
                <ul>
                    <li className="logo-wrap">
                        <h1 className="logo">westagram</h1>
                    </li>
                    <li className="search-wrap">
                        <input className="search-input" type="text" placeholder="검색"/>
                        <FaSearch />
                    </li>
                    <li className="icon-wrap">
                        <ul className="icon">
                            <li className="local"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="위치아이콘"/></li>
                            <li className="heart"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트아이콘"/></li>
                            <li className="profile"><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603" alt="프로필아이콘"/></li>
                        </ul>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;
