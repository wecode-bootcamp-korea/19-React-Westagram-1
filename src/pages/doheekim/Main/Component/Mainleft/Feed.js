import React from "react";
import Comments from "./Comments";
import COMMENT from "./CommentData";
import "./Feed.scss";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "#0094f64b",
      newComment: "",
      comments: [[{ id: 0, userId: "", comment: "" }]],
    };
  }

  commentValue = (e) => {
    this.setState({
      newComment: e.target.value,
    });
  };

  componentDidMount() {
    this.setState({
      comments: COMMENT,
    });
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          userId: "_ggul_dodo",
          comment: this.state.newComment,
          key: this.state.comments.length,
        },
      ],
      newComment: "",
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter" && this.state.newComment) {
      this.addComment();
      e.target.value = "";
    }
  };

  render() {
    return (
      <div className="feeds">
        <article>
          <ul className="feeds-header">
            <li className="feeds-idwrap">
              <ul>
                <li className="mini-profile">
                  <img
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/154058443_217688870078059_3669752827847367841_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ceRMdT1axXoAX_Lpuxn&edm=AABBvjUAAAAA&ccb=7-4&oh=92252211fe0704195cbc8ded03d8a95b&oe=608AF997&_nc_sid=83d603"
                    alt="도희미니프로필"
                  />
                </li>
                <li className="mini-id">_dodo_hee</li>
              </ul>
            </li>
            <li className="more">
              <FaEllipsisH />
            </li>
          </ul>
          <img
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/147433190_1080989829067597_3410425774798521157_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4eaa4k_pRbMAX-6ykCQ&edm=AP_V10EAAAAA&ccb=7-4&oh=3488aecc9c05d6f705bbb3877660aaf6&oe=6088F135&_nc_sid=4f375e"
            alt="피드사진"
          />
          <div className="feeds-bottom">
            <ul className="feeds-bottom-flex">
              <li className="feeds-icon">
                <ul className="feeds-iconbox">
                  <li className="heart-btn">
                    <button>
                      <FaRegHeart />
                    </button>
                  </li>
                  <li className="comment-btn">
                    <button>
                      <FaRegComment />
                    </button>
                  </li>
                  <li className="share-btn">
                    <button>
                      <FaRegShareSquare />
                    </button>
                  </li>
                </ul>
              </li>
              <li className="bookmark">
                <button>
                  <FaRegBookmark />
                </button>
              </li>
            </ul>
            <div className="heart-count">
              <img
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/155180730_424134145319091_2244618473151617561_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jkEKojtr85AAX-RveBi&edm=AOG-cTkAAAAA&ccb=7-4&oh=7f7b1c626d17579c1586680935296ee6&oe=608C1C0B&_nc_sid=282b66"
                alt="좋아요누른사람사진"
              />
              <p>
                <span className="bold">j_vely_s2</span>님 <span>외 121명</span>
                이 좋아합니다
              </p>
            </div>
            <ul className="content-write">
              <li>
                <span className="chat-id">_dodo_hee</span>
                <span className="chat-content">까눌레 엉엉😭</span>
              </li>
              {this.state.comments.map((item) => (
                <Comments
                  key={item.length}
                  userId={item.userId}
                  comment={item.comment}
                ></Comments>
              ))}
            </ul>
            <p className="time">7시간 전</p>
          </div>
          <ul className="comment-write">
            <li>{FaRegSmile}</li>
            <li>
              <input
                className="comment-inner"
                onChange={this.commentValue}
                onKeyPress={this.pressEnter}
                value={this.state.newComment}
                type="text"
                placeholder="댓글 달기..."
              />
            </li>
            <li>
              <button
                className="submit"
                onClick={this.addComment}
                style={{
                  color:
                    this.state.newComment.length > 0
                      ? "#0094f6"
                      : this.state.color,
                }}
              >
                게시
              </button>
            </li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Feed;
