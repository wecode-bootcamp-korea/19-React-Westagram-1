import React, { Component } from "react";
import "./Header.scss";
class Header extends Component {
	constructor() {
		super();
		this.state = {
			searchInput: "",
			searchIcon: false,
			searchPlaceholder: false,
			cancelIcon: false,
		};

		this.searchRef = React.createRef();
	}

	componentDidMount() {
		document.addEventListener("click", this.clickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.clickOutside);
	}

	handleSearchInput = (e) => {
		this.setState({
			searchInput: e.target.value,
		});
	};

	clickOutside = (e) => {
		if (!this.searchRef.current.contains(e.target)) {
			this.setState({
				searchIcon: false,
				searchPlaceholder: false,
				cancelIcon: false,
			});
		}
	};

	clickSearch = () => {
		const { searchIcon, searchPlaceholder, cancelIcon } = this.state;
		this.setState({
			searchIcon: !searchIcon,
			searchPlaceholder: !searchPlaceholder,
			cancelIcon: !cancelIcon,
		});
	};

	clickCancel = () => {
		this.setState({
			searchInput: "",
		});
	};

	render() {
		const { searchIcon, searchPlaceholder, cancelIcon } = this.state;

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
							onChange={this.handleSearchInput}
							tabIndex="0"
							onClick={this.clickSearch}
							id={
								searchPlaceholder ? "search-placeholder-moved" : "search-input"
							}
							type="text"
							placeholder="검색"
							ref={this.searchRef}
						/>
						<i
							id={searchIcon ? "search-icon-moved" : "search-icon"}
							className="fas fa-search fa-sm"></i>
						<i
							id={cancelIcon ? "cancel-icon-enabled" : "cancel-icon"}
							onClick={this.clickCancel}
							className="fas fa-times-circle fa-sm"></i>
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
