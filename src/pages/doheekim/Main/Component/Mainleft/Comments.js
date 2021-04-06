import React from "react";
//import { IoMdCloseCircleOutline } from "react-icons/io";
// import { FiHeart } from "react-icons/fi";
class Comments extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/data/CommentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comment: data,
        });
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
