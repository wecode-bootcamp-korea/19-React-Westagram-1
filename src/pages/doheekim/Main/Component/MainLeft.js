import React from "react";
import Story from "./Mainleft/Story";
import Feed from "./Mainleft/Feed";
import "./MainLeft.scss";
// import { FaRedditAlien } from "react-icons/fa";

class MainLeft extends React.Component {
  state = {
    feedList: [],
  };

  // componentDidMount() {
  //   fetch("http://10.58.2.229:8000/posts/post", {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem("Token"),
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   //     });
  //   // .then((data) => {
  //   //   this.setState({
  //   //     feedList: data,
  //   //     console.log(data)
  //   //   });
  //   // });
  // }

  aaa = () => {
    // console.log("aaa 함수호출");
    fetch("http://10.58.2.229:8000/posts/post", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          feedList: res.RESULT,
        });
        console.log(res.RESULT);
      });
  };

  render() {
    const { feedList } = this.state;
    return (
      <div className="main-left">
        {/* <button onClick={this.aaa}>click</button> */}
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
