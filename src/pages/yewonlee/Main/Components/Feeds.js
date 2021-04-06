import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comment from './Comment';
import heart from "../../images/heart.png";
import speechBubble from "../../images/speech-bubble.png";
import share from "../../images/export.png";
import bookmark from "../../images/bookmark.png";

class Feeds extends Component {
   
    render() { 
        const { commentLine, commentValue, clickLikeIcon, clickDeleteIcon,
            handleCommentValue, enterCommentLine, submitCommentLine } = this.props;   
        
        return ( 
                <>
                <div className="feeds">
                    <div className="feeds-header">
                        <div className="profile-info-description">
                            <img
                                className="profile-info-img"
                                alt="wecode's profile"
                                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=-j1lmRii5IgAX8_8L10&ccb=7-4&oh=8c73048cdfe9212ffd68dccd68af95fe&oe=607FEFF0"
                            />
                            <div className="profile-info-texts">
                                <span className="user-id">wecode_bootcamp</span>
                            </div>
                        </div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <article>
                        <img
                            className="article-img"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/161342772_792602644682701_5684032460726315608_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=b5KsVNfeKRYAX--xRO9&ccb=7-4&oh=3b5b7a9e79a4e9b935dc390994722161&oe=6082A37C"
                            alt="by wecode"
                        />

                        <div className="article-icons">
                            <img alt="heart icon" className="article-icon" src={heart} />
                            <img alt="comment icon" className="article-icon" src={speechBubble} />
                            <img alt="share icon" className="article-icon" src={share} />
                            <img alt="bookmark icon" className="article-icon" src={bookmark} />
                        </div>
                        <div className="article-contents">
                            <div className="number-of-likes">
                                <span>
                                    <span id="who-liked">aineworld</span>님
                                    <span id="others">외 10명</span>이 좋아합니다
                                </span>
                            </div>
                            <div className="caption">
                                <span>
                                    함께해서 wecode 18기 위니또 소식🥰⠀ 벌써 위코드에 오신지 한 달이나
                                    지나 두달차를 보내고계신 18기 분들 시간이 정말 빠르게
                                    흘러가는 것 같아요 ✨
                                </span>
                                <button id="caption-more">더 보기</button>
                            </div>
                            <Comment
                                commentLine={commentLine}
                                commentValue={commentValue}
                                clickLikeIcon={clickLikeIcon}
                                clickDeleteIcon={clickDeleteIcon}
                            />
                            <span id="time">54분 전</span>
                        </div>
                        <CommentBox
                            enterCommentLine={enterCommentLine}
                            commentValue={commentValue}
                            handleCommentValue={handleCommentValue}
                            submitCommentLine={submitCommentLine}
                        />
                    </article>
                </div>
                </>
         );
    }
}
 
export default Feeds;
