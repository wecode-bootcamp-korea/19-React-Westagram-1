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
                                <li className="local"><img src="./images/explore.png" alt="위치아이콘"/></li>
                                <li className="heart"><img src="./images/heart.png" alt="하트아이콘"/></li>
                                <li className="profile"><img src="./images/dohee.jpeg" alt="프로필아이콘"/></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <main>
                    <section className="main-left">
                        <div className="story">
                            <ul className="story-wrap">
                                <li className="story-list">
                                    <img src="./images/dohee.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">_dodo_hee</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/jiyeon.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">hopthis</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/yunhee.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">wooyoon</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/wecode.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">_wecode</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/jungA.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">_j_vely_s2</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/sunyoung.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">_lee_yeah</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/yeji.jpeg" alt="프로필이미지"/>
                                    <p className="story-id">_yeam_y2</p>
                                </li>
                                <li className="story-list">
                                    <img src="./images/bobae.jpeg" alt="프로필이미지"/>
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
                                                <img src="./images/dohee.jpeg" alt="도희미니프로필"/>
                                            </li>
                                            <li className="mini-id">_dodo_hee</li>
                                        </ul>
                                    </li>
                                    <li className="more"><FaEllipsisH /></li>
                                </ul>
                                <img src="./images/photo1.jpeg" alt="피드사진"/>
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
                                        <img src="./images/jungA.jpeg" alt="좋아요누른사람사진"/>
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
                                        <img src="./images/dohee.jpeg" alt="프로필이미지"/>
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
                                    <li><img src="./images/jiyeon.jpeg" alt="친구프로필"/></li>
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
                                    <li><img src="./images/dohee2.jpeg" alt="친구프로필"/></li>
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
                                    <li><img src="./images/hojung.jpeg" alt="친구프로필"/></li>
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
                                    <li><img src="./images/bobae.jpeg" alt="친구프로필"/></li>
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
                                    <li><img src="./images/wecode.jpeg" alt="친구프로필"/></li>
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
 
