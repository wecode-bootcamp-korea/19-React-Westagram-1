import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Feeds from "./Components/Feeds/Feeds";
import "./Main.scss";
class Main extends Component {
	constructor() {
		super();
		this.state = {
			feeds: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:3002/data/feedsDataYW.json", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					feeds: data,
				});
			});
	}

	render() {
		return (
			<>
				<div className="Main">
					<main className="main-feeds-aside">
						<Header />
						<Feeds feeds={this.state.feeds} />
						<div className="main-right-container">
							<div className="main-right">
								<div className="profile-info-description">
									<img
										className="profile-info-img-big"
										alt="profile"
										src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/59551160_331483447527536_8846521478770851840_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=FX9Oo9XB-LwAX_Y5yNc&edm=ABfd0MgAAAAA&ccb=7-4&oh=69e6af1321eff6a6344f38352bea3f58&oe=6091ECB6&_nc_sid=7bff83"
									/>
									<div className="profile-info-texts">
										<span className="user-id">jessywlee</span>
										<span className="user-description">jessica yw lee</span>
									</div>
								</div>
								<div className="stories-follow-suggestions">
									<div className="stories-suggestions">
										<header className="stories-title">
											<span>스토리</span>
											<span>모두 보기</span>
										</header>
										<ul className="profile-list">
											<li className="profile-info-description">
												<div className="profile-info-img-wrap">
													<img
														className="profile-info-img stories-profile"
														alt="profile"
														src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/158122894_447868959784963_4100443008018383153_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=tu95oA3THwYAX9bYRgp&ccb=7-4&oh=c12c0c753d0544294a810b476f826f50&oe=6085FBE4&_nc_sid=48a2a6"
													/>
												</div>
												<div className="profile-info-texts">
													<span className="user-id">junghyun0515</span>
													<span className="user-description">16분 전</span>
												</div>
											</li>
											<li className="profile-info-description">
												<div className="profile-info-img-wrap">
													<img
														className="profile-info-img stories-profile"
														alt="profile"
														src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/81649156_503044973949595_4191357854298406912_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=7Lz4_t3hbH4AX9I4zaA&ccb=7-4&oh=9ffc4354b4968704d7c0450a7200bea6&oe=60852A9E&_nc_sid=48a2a6"
													/>
												</div>
												<div className="profile-info-texts">
													<span className="user-id">tennistv</span>
													<span className="user-description">3시간 전</span>
												</div>
											</li>
											<li className="profile-info-description">
												<div className="profile-info-img-wrap">
													<img
														className="profile-info-img stories-profile"
														alt="profile"
														src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/162909864_459347605411027_3957180093226145641_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=MIeMHIE6IwUAX8z9Sqr&ccb=7-4&oh=b5e3af430377becdba3b204b8b35425a&oe=60836671&_nc_sid=48a2a6"
													/>
												</div>
												<div className="profile-info-texts">
													<span className="user-id">domithiemteam</span>
													<span className="user-description">20시간 전</span>
												</div>
											</li>
											<li className="profile-info-description">
												<div className="profile-info-img-wrap">
													<img
														className="profile-info-img stories-profile"
														alt="profile"
														src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/90670034_1091346454563695_5111844151276601344_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=TfoPp8uV6VEAX9z_4qa&ccb=7-4&oh=1ad047751589ee826e7922036f307903&oe=6085CE64&_nc_sid=48a2a6"
													/>
												</div>
												<div className="profile-info-texts">
													<span className="user-id">kygomusic</span>
													<span className="user-description">21시간 전</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="follow-suggestions">
										<header className="suggestions-title">
											<span>회원님을 위한 추천</span>
											<span>모두 보기</span>
										</header>
										<ul className="profile-list">
											<li className="profile-info-description">
												<img
													className="profile-info-img"
													alt="profile"
													src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/161599129_1801795143336601_7346804126673758537_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pA7bGfbpka4AX966tZg&ccb=7-4&oh=43a21e58ee1537e27777fa493cbdcb78&oe=60840137&_nc_sid=acd11b"
												/>
												<div className="profile-info-texts">
													<span className="user-id">pieces.kr</span>
													<span className="user-description">
														swoon님 외 1명이 팔로우합니다
													</span>
												</div>
												<button className="follow-button">팔로우</button>
											</li>
											<li className="profile-info-description">
												<img
													className="profile-info-img"
													alt="profile"
													src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/159116618_4319753811374779_1929304625812395884_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=YImgxB83NcYAX-FnHbL&ccb=7-4&oh=e9ac1b4a55ca72c4eb683d3828faef6e&oe=6082C7A8&_nc_sid=acd11b"
												/>
												<div className="profile-info-texts">
													<span className="user-id">devaine.c</span>
													<span className="user-description">
														canon.mj님 외 5명이 팔로우합니다
													</span>
												</div>
												<button className="follow-button">팔로우</button>
											</li>
											<li className="profile-info-description">
												<img
													className="profile-info-img"
													alt="profile"
													src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118570862_2093060344159002_8700948584721123822_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=QjSXptR-tboAX-ztA3K&ccb=7-4&oh=480e9b9807715c0786628e1c174f4973&oe=608590A2&_nc_sid=7bff83"
												/>
												<div className="profile-info-texts">
													<span className="user-id">domithiem</span>
													<span className="user-description">
														tennistv님 외 12명이 팔로우합니다
													</span>
												</div>
												<button className="follow-button">팔로우</button>
											</li>
										</ul>
									</div>
								</div>

								<nav id="footer">
									<ul>
										<li>
											<a href="https://www.instagram.com/">About</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Help</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Press</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">API</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Jobs</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Privacy</a>
										</li>

										<li>
											<a href="https://www.instagram.com/">Terms</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Locations</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Top Accounts</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Hashtags</a>
										</li>
										<li>
											<a href="https://www.instagram.com/">Language</a>
										</li>
									</ul>
									<div>
										Icons made by{" "}
										<a href="https://www.flaticon.com/" title="Those Icons">
											Those Icons
										</a>{" "}
										from{" "}
										<a href="https://www.flaticon.com/" title="Flaticon">
											www.flaticon.com
										</a>
									</div>
									<span>© 2021 INSTAGRAM FROM FACEBOOK</span>
								</nav>
							</div>
						</div>
					</main>
				</div>
			</>
		);
	}
}

export default Main;
