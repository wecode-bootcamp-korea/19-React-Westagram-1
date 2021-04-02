import React from 'react';
import './CommentWrite.scss';

class CommentWrite extends React.Component {
    render() { 
        return ( 
            <ul className="comment-write">
                <li><i className="fa fa-smile-o" aria-hidden="true"></i></li>
                <li><input className="comment-inner" onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" placeholder="댓글 달기..." /></li>
                <li><button className="submit" disabled={true}>게시</button></li>
            </ul>
         );
    }
}
 
export default CommentWrite;