import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      color: true,
    };
  }

  colorChange = () => {
    this.setState({
      color: !this.state.color,
    });
  };

  render() {
    return (
      <>
        <li>
          <span className="nickname">{this.props.username}</span>
          {this.props.replie}
          <span className="event">
            <i
              class="fas fa-heart"
              onClick={this.colorChange}
              style={{ color: this.state.color ? 'burlywood' : 'red' }}
            ></i>

            <i class="far fa-trash-alt"></i>
          </span>
        </li>
      </>
    );
  }
}

export default Comment;
