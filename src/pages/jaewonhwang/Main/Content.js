import React, { Component } from "react";

class Content extends Component {
  render() {
    const { userId, content } = this.props;
    return (
      <>
        <li>
          {userId}
          {content}
        </li>
      </>
    );
  }
}

export default Content;
