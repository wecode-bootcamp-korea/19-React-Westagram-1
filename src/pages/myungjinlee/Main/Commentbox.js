import React, { Component } from 'react';

class Commentbox extends Component {
  render() {
    return (
      <>
        <p>
          {this.props.name}
          <a href="www.google.com" className="nickname">
            @cat
          </a>
          {this.props.comment}
        </p>
      </>
    );
  }
}

export default Commentbox;
