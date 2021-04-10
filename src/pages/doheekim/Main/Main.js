import React, { Component } from "react";
import Nav from "./Component/Nav";
import MainLeft from "./Component/MainLeft";
import MainRight from "./Component/MainRight";
import "./Main.scss";
import "./common.scss";

//레이아웃 컴포넌트 끝

//메인 컴포넌트

class Main extends Component {
  render() {
    return (
      <body>
        <Nav />
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </body>
    );
  }
}

export default Main;
