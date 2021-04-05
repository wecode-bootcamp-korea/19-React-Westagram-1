import React from "react";

class Comments extends React.Component {
  render() {
    const { userId, comment } = this.props;
    return (
      <li key={this.props.key}>
        <span className="chat-id">{userId}</span>
        <span className="chat-content">{comment}</span>
      </li>
    );
  }
}

export default Comments;
