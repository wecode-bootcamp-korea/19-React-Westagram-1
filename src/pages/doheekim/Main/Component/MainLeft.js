import React from "react";
import "./MainLeft.scss";
import Story from "./Mainleft/Story";
import Feed from "./Mainleft/Feed";

class MainLeft extends React.Component {
  state = {
    feedList: [],
  };

  componentDidMount() {
    fetch("/data/FeedData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="main-left">
        <Story />
        {feedList.map((element) => {
          return (
            <Feed
              id={element.id}
              name={element.userId}
              count={element.count}
              img={element.img}
              title={element.title}
            />
          );
        })}
      </div>
    );
  }
}

export default MainLeft;
