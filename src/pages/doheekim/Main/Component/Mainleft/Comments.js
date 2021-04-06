import React from "react";
import COMMENT from "./CommentData";
//import { IoMdCloseCircleOutline } from "react-icons/io";
// import { FiHeart } from "react-icons/fi";
class Comments extends React.Component {
  componentDidMount() {
    this.setState({
      comments: COMMENT,
    });
  }

  render() {
    const { userId, comment } = this.props;
    return (
      <li key={this.props.id}>
        <span className="chat-id">{userId}</span>
        <span className="chat-content">{comment}</span>
        {/* <span className="chat-heart" onclick={this.handleButton}>
          <FiHeart />
        </span> */}
        {/* <span className="chat-remove">
          <IoMdCloseCircleOutline />
        </span> */}
      </li>
    );
  }
}

export default Comments;
