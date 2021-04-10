import React, { Component } from "react";
import "./Comment.scss";
class Comment extends Component {
	render() {
		const { commentLine, clickLikeIcon, clickDeleteIcon } = this.props;

		return (
			<ul className="comments-list">
				{commentLine.map((val) => {
					return (
						<li className="each-comment" key={val.commentId}>
							<span>{val.accountName}</span> {val.text}
							<button
								style={{ display: val.commentIcon }}
								className="trash-button">
								<i
									onClick={() => clickDeleteIcon(val.commentId)}
									className="far fa-trash-alt"></i>
							</button>
							<button
								id={val.commentId}
								style={{ display: val.commentIcon }}
								className="like-button">
								<i
									onClick={() => clickLikeIcon(val.commentId)}
									className={
										val.likeIcon ? "liked fas fa-heart" : "far fa-heart"
									}></i>
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Comment;
