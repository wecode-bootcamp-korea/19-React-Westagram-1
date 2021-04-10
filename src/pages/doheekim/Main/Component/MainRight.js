import React from "react";
import "./MainRight.scss";
import RecommendHeader from "./MainRight/RecommendHeader";
import RecommendTitle from "./MainRight/RecommendTitle";
import RecommendFriends from "./MainRight/RecommendFriends";
import Footer from "./MainRight/Footer";

class MainRight extends React.Component {
  render() {
    return (
      <div className="main-right">
        <RecommendHeader></RecommendHeader>
        <RecommendTitle></RecommendTitle>
        <RecommendFriends></RecommendFriends>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainRight;
