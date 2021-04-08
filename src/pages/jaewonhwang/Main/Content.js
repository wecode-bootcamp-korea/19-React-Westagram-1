import React, { Component } from "react";

class Content extends Component {
  render() {
    const { userId, content } = this.props;
    return (
      <>
        <li>
          <span className="userid">{userId}</span>
          <span className="content">{content}</span>
        </li>
      </>
    );
  }
}

export default Content;
