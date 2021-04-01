
import React, { Component } from 'react';
import './Main.scss';
import './common.css';
import { FaSearch } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaRegHeart} from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <body>
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
                <main>
                    <section className="main-left">
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
                        <div className="feeds">
                            <article>
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
                                <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/147433190_1080989829067597_3410425774798521157_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4eaa4k_pRbMAX-6ykCQ&edm=AP_V10EAAAAA&ccb=7-4&oh=3488aecc9c05d6f705bbb3877660aaf6&oe=6088F135&_nc_sid=4f375e" alt="피드사진"/>
                                <div className="feeds-bottom">
                                    <ul className="feeds-bottom-flex">
                                        <li className="feeds-icon">
                                            <ul className="feeds-iconbox">
                                                <li className="heart-btn"><button><FaRegHeart /></button></li>
                                                <li className="comment-btn"><button><FaRegComment /></button></li>
                                                <li className="share-btn"><button><FaRegShareSquare /></button></li>
                                            </ul>
                                        </li>
                                        <li className="bookmark">
                                            <button><FaRegBookmark /></button>
                                        </li>
                                    </ul>
                                    <div className="heart-count">
                                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/155180730_424134145319091_2244618473151617561_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jkEKojtr85AAX-RveBi&edm=AOG-cTkAAAAA&ccb=7-4&oh=7f7b1c626d17579c1586680935296ee6&oe=608C1C0B&_nc_sid=282b66" alt="좋아요누른사람사진"/>
                                        <p><span className="bold">j_vely_s2</span>님 <span>외 121명</span>이 좋아합니다</p>
                                    </div>
                                    <ul className="content-write">
                                        <li>
                                            <span className="chat-id">_dodo_hee</span>
                                            <span className="chat-content">까눌레 엉엉😭</span>
                                            
                                        </li>
                                    </ul>
                                    <p className="time">7시간 전</p>
                                </div>
                                <ul className="comment-write">
                                    <li><i className="fa fa-smile-o" aria-hidden="true"></i></li>
                                    <li><input className="comment-inner" type="text" placeholder="댓글 달기..." /></li>
                                    <li><button className="submit">게시</button></li>
                                </ul>
                            </article>
                        </div>
                    </section>
                    <div className="main-right">
                        <ul className="recommend-header">
                            <li>
                                <ul className="recommend-header-flex">
                                    <li>
                                        <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603" alt="프로필이미지"/>
                                    </li>
                                    <li>
                                        <p className="recommend-header-id">_dodo_hee</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="log-out recommend-blue">전환</li>
                        </ul>
                        <div className="recommend-title">
                            <p className="recommend-title-left">회원님을 위한 추천</p>
                            <p className="recommend-title-right">모두보기</p>
                        </div>
                        <ul className="recommend-friend">
                            <li className="friend-list">
                                <ul>
                                    <li><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/97360706_264499871365487_5373981785061326848_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ggVf-M4NbYsAX_hd85m&edm=ALlQn9MAAAAA&ccb=7-4&oh=86f2fa587bbe5a7783c873ae8dbf1a90&oe=60894E45&_nc_sid=48a2a6" alt="친구프로필"/></li>
                                    <li>
                                        <p className="friends-id">hopemusic</p>
                                        <p className="friends-follow">_dodo_hee님 외 8명이 팔로우합니다</p>
                                    </li>
                                    <li>
                                        <p className="follows recommend-blue">팔로우</p>
                                    </li>
                                </ul> 
                            </li>
                            <li className="friend-list">
                                <ul>
                                    <li><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/133598051_2870803729863887_9089010213067629145_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=C1ExGyc7VfEAX96xqJk&edm=ABfd0MgAAAAA&ccb=7-4&oh=aecbf612f98f94bb3e52b082cc989539&oe=608A0A1D&_nc_sid=7bff83" alt="친구프로필"/></li>
                                    <li>
                                        <p className="friends-id">_ggul_dodo</p>
                                        <p className="friends-follow">_dodo_hee님 외 1명이 팔로우합니다</p>
                                    </li>
                                    <li>
                                        <p className="follows recommend-blue">팔로우</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="friend-list">
                                <ul>
                                    <li><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/155278572_167139581887499_4850873868022936954_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CrtwkyUk-4UAX-1R-mi&edm=ABfd0MgAAAAA&ccb=7-4&oh=42dd39a686dc85e51a1db5103a1cda6a&oe=6088F6CE&_nc_sid=7bff83" alt="친구프로필"/></li>
                                    <li>
                                        <p className="friends-id">_hj__s2</p>
                                        <p className="friends-follow">_dodo_hee님 외 5명이 팔로우합니다</p>
                                    </li>
                                    <li>
                                        <p className="follows recommend-blue">팔로우</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="friend-list">
                                <ul>
                                    <li><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131607260_485328999102785_2325519788938400196_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=1sjs607YC1AAX_FDJzD&edm=ABfd0MgAAAAA&ccb=7-4&oh=3f30e05871f35885a90ba82baf15a799&oe=608A943B&_nc_sid=7bff83" alt="친구프로필"/></li>
                                    <li>
                                        <p className="friends-id">cherish_bb</p>
                                        <p className="friends-follow">_dodo_hee님 외 2명이 팔로우합니다</p>
                                    </li>
                                    <li>
                                        <p className="follows recommend-blue">팔로우</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="friend-list">
                                <ul>
                                    <li><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VS7U68vXoc8AX_DX1Jh&edm=ANmP7GQAAAAA&ccb=7-4&oh=e845f9d6a9bb6114c4c4a19eb2b9c924&oe=608B6830&_nc_sid=276363" alt="친구프로필"/></li>
                                    <li>
                                        <p className="friends-id">_wecode</p>
                                        <p className="friends-follow">_dodo_hee님 외 12명이 팔로우합니다</p>
                                    </li>
                                    <li>
                                        <p className="follows recommend-blue">팔로우</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <footer>
                            <ul>
                                <li>소개</li>
                                <li>도움말</li>
                                <li>홍보 센터</li>
                                <li>API</li>
                                <li>채용 정보</li>
                                <li className="after-none">개인정보처리방침</li>
                                <li>약관</li>
                                <li>위치</li>
                                <li>인기 계정</li>
                                <li>해쉬태그</li>
                                <li className="after-none">언어</li>
                            </ul>
                            <p className="made">© 2021 INSTAGRAM FROM doheekim</p>
                        </footer>
                    </div>
                </main>
         </body>
         );
    }
}

export default Main;
 
