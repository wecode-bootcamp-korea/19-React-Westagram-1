import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {


    render() {
       const { commentLine } = this.props;
        return (
            <div className="comments-list">
                {commentLine.map((val, index) => {
                    return <span key={index}>{val.text}</span>
                })}
            </div>
        )
    };

}

export default Comment;
