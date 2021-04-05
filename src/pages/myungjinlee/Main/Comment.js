import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <>
        <li>{this.props.replie}</li>
      </>
    );
  }
}

export default Comment;
