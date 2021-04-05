import React from "react";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { FiHeart } from "react-icons/fi";
class Comments extends React.Component {
  render() {
    const { userId, comment } = this.props;
    return (
      <li key={this.props.key}>
        <span className="chat-id">{userId}</span>
        <span className="chat-content">{comment}</span>
        {/* <span className="chat-heart">
          <FiHeart />
        </span>
        <span className="chat-remove" onClick={this.handleRemove}>
          <IoMdCloseCircleOutline />
        </span> */}
      </li>
    );
  }
}

export default Comments;
