import React, { Component } from 'react';

class Commentbox extends Component {
  render() {
    const { name, comment } = this.props;
    return (
      <>
        <p>
          {name}
          <a href="www.google.com" className="nickname">
            @cat
          </a>
          {comment}
        </p>
      </>
    );
  }
}

export default Commentbox;
