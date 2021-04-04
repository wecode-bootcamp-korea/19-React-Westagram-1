import React from "react";
import "./MainLeft.scss";
import Story from "./Mainleft/Story";
import Feed from "./Mainleft/Feed";

class MainLeft extends React.Component {
  render() {
    return (
      <div className="main-left">
        <Story></Story>
        <Feed></Feed>
      </div>
    );
  }
}

export default MainLeft;
