import React, {
	Component,
} from "react";
import CommentBox from "../CommentBox/CommentBox";
import Comment from "../Comment/Comment";
import "./Feeds.scss";
import heart from "../../../images/heart.png";
import speechBubble from "../../../images/speech-bubble.png";
import share from "../../../images/export.png";
import bookmark from "../../../images/bookmark.png";

class Feeds extends Component {
	constructor() {
		super();
		this.state = {
			commentValue: "",
			commentLine: [],
		};
	}

	handleCommentValue = (e) => {
		this.setState({
			commentValue: e.target.value,
		});
	};

	componentDidMount() {
		fetch(
			"http://localhost:3002/data/commentDataYW.json",
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((commentData) => {
				this.setState({
					commentLine: commentData,
				});
			});
	}

	setCommentLine = () => {
		const { commentLine } = this.state;
		this.setState({
			commentLine: commentLine.concat({
				commentId:
					this.state.commentLine
						.length + 1,
				accountName: "jessywlee",
				text: this.state.commentValue,
				commentIcon: "initial",
				likeIcon: false,
			}),
			commentValue: "",
		});
	};

	submitCommentLine = (e) => {
		e.preventDefault();
		this.setCommentLine();
	};

	enterCommentLine = (e) => {
		if (
			this.state.commentValue !== "" &&
			e.charCode === 13
		) {
			this.setCommentLine();
		}
	};

	clickLikeIcon = (commentId) => {
		const { commentLine } = this.state;
		this.setState({
			commentLine: commentLine.map(
				(comment) => {
					if (
						comment.commentId ===
						commentId
					) {
						comment.likeIcon = !comment.likeIcon;
					}
					return comment;
				}
			),
		});
	};

	clickDeleteIcon = (commentId) => {
		const { commentLine } = this.state;
		this.setState({
			commentLine: commentLine.filter(
				(comment) =>
					comment.commentId !==
					commentId
			),
		});
	};

	render() {
		const {
			commentLine,
			commentValue,
		} = this.state;
		const {
			clickLikeIcon,
			clickDeleteIcon,
			handleCommentValue,
			enterCommentLine,
			submitCommentLine,
		} = this;
		const { feeds } = this.props;
		return (
			<>
				<div className="feeds-container">
					<div className="feeds">
						{feeds.map((val) => {
							return (
								<div
									key={val.feedId}
									className="feed">
									<div className="feeds-header">
										<div className="profile-info-description">
											<img
												className="profile-info-img"
												alt="profile"
												src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/59551160_331483447527536_8846521478770851840_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=FX9Oo9XB-LwAX_Y5yNc&edm=ABfd0MgAAAAA&ccb=7-4&oh=69e6af1321eff6a6344f38352bea3f58&oe=6091ECB6&_nc_sid=7bff83"
											/>
											<div className="profile-info-texts">
												<span className="user-id">
													jessywlee
												</span>
											</div>
										</div>
										<i className="fas fa-ellipsis-h"></i>
									</div>
									<article>
										<img
											className="article-img"
											src={
												val.feedPicUrl
											}
											alt="by wecode"
										/>

										<div className="article-icons">
											<img
												alt="heart icon"
												className="article-icon"
												src={heart}
											/>
											<img
												alt="comment icon"
												className="article-icon"
												src={
													speechBubble
												}
											/>
											<img
												alt="share icon"
												className="article-icon"
												src={share}
											/>
											<img
												alt="bookmark icon"
												className="article-icon"
												src={bookmark}
											/>
										</div>
										<div className="article-contents">
											<div className="number-of-likes">
												<span>
													<span id="who-liked">
														{
															val.accountWhoLiked
														}
													</span>
													님
													<span id="others">
														{
															val.numOfAccountsLiked
														}
													</span>
													이 좋아합니다
												</span>
											</div>
											<div className="caption">
												<span>
													{val.caption}
												</span>
												<button id="caption-more">
													더 보기
												</button>
											</div>
											<Comment
												commentLine={
													commentLine
												}
												commentValue={
													commentValue
												}
												clickLikeIcon={
													clickLikeIcon
												}
												clickDeleteIcon={
													clickDeleteIcon
												}
											/>
											<span id="time">
												{val.timePosted}
											</span>
										</div>
										<CommentBox
											enterCommentLine={
												enterCommentLine
											}
											commentValue={
												commentValue
											}
											handleCommentValue={
												handleCommentValue
											}
											submitCommentLine={
												submitCommentLine
											}
										/>
									</article>
								</div>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}

export default Feeds;
