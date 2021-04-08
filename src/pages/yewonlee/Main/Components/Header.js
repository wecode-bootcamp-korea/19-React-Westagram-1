import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			searchInput: "",
			searchIcon: false,
		};
	}

	changeSearchIcon = () => {
		const { searchIcon } = this.state;
		this.setState({
			searchIcon: !searchIcon,
		});
	};

	render() {
		const { searchIcon } = this.state;

		return (
			<div className="header-container">
				<nav className="header">
					<header id="header-main">
						<i className="fab fa-instagram fa-2x"></i>
						<div className="separator"></div>
						<span className="title">Westagram</span>
					</header>
					<div className="search">
						<input
							tabIndex="0"
							onClick={this.changeSearchIcon}
							id="search-input"
							type="text"
							placeholder="검색"
						/>
						<i
							id={searchIcon ? "search-icon-moved" : "search-icon"}
							className="fas fa-search fa-sm"></i>
						<i id="cancel-icon" className="fas fa-times-circle fa-sm"></i>
					</div>
					<div className="header-right">
						<i className="far fa-compass fa-2x"></i>
						<i className="far fa-heart fa-2x"></i>
						<i className="far fa-user fa-2x"></i>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
