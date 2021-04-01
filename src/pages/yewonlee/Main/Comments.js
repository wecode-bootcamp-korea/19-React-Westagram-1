import React, { Component } from 'react';
import './Comments.scss';

class Comments extends Component {


    render() {
        console.log(this.props);
        return (
            <div>
                <div className="comments-list">
                    <p id={this.props.commentValue[0].key}>{this.props.commentValue[0].comment}</p>
                    <p id={this.props.commentValue[1].key}>{this.props.commentValue[1].comment}</p>
                </div>
                <div className="comments-box">
                    <input id="comments-input" onChange={this.props.handleCommentInput} type="text" placeholder="댓글 달기..." />
                    <button className="comments-button" id={this.props.changeCommentsButtonStyle()} disabled={this.props.enableCommentsButton()}>게시</button>
                </div>
            </div>
        )
    };

}

export default Comments;
