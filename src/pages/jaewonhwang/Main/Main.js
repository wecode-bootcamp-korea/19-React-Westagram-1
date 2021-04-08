import { Component } from "react"; // named export vs. default export
import Feeds from "./Feeds";
import "./Main.scss";

class MainJW extends Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch("/data/FeedsData.json", {
      //해당파일의 url localhost번호와 동일해야함
      //지워주면 로컬호스트가 자동으로 인식됨 "/data/FeedsData.json"
      method: "GET",
      //디폴트 메서드 get이라 생략가능
      //fetch("http://localhost:3000/data/FeedsData.json")
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  componentDidUpdate() {
    //해당 부분에 함수가 들어오면 무한 rerendering으로 인해 화면이 멈춰버림
  }

  iconOnclickHandler = () => {};
  render() {
    return (
      <div className="mainJW">
        <nav className="nav">
          <div className="nav_all">
            <h4>Westagram</h4>
            <div className="main_search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" />
            </div>

            <div className="nav_icons">
              <i className="fas fa-home" onClick={this.iconOnclickHandler}></i>
              <i
                className="far fa-paper-plane"
                onClick={this.iconOnclickHandler}
              ></i>
              <i
                className="far fa-compass"
                onClick={this.iconOnclickHandler}
              ></i>
              <i className="far fa-heart" onClick={this.iconOnclickHandler}></i>
              <span onClick={this.iconOnclickHandler}>
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                  alt="이미지"
                />
              </span>
            </div>
          </div>
        </nav>

        <div className="main_feed">
          <article className="feeds">
            <section className="story">
              <ul>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>yiseungin</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>ysky__1031</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>ysummerinbk</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>ye__naa</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>yos_5959</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>ynayoungkee</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>kim.asha.1</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>youlakk</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>czzzzzzha_x</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>hyeri_0609</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>r_yuhyeju</p>
                </li>
                <li>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>kxngg.94</p>
                </li>
              </ul>
            </section>
            <section className="post">
              <ul>
                {this.state.feeds.map((feed) => {
                  return (
                    <Feeds
                      header_img={feed.header_img}
                      name={feed.name}
                      city={feed.city}
                      main_img={feed.main_img}
                      like_img={feed.like_img}
                      text={feed.text}
                      key={feed.id}
                    />
                  );
                })}
              </ul>
            </section>
          </article>

          <article className="sidebar">
            <section className="sidebar01">
              <img
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                alt="이미지"
              />
              <p>01__9_7</p>
              <a href="#@">전환</a>
            </section>

            <section className="sidebar02">
              <div className="sidebar02_1">
                <p>회원님을 위한 추천</p>
                <a href="#@">모두보기</a>
              </div>
              <div className="sidebar02_2">
                <ul>
                  <li>
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                      alt="이미지"
                    />
                    <span>
                      <h5>muri_lab</h5>
                      <p>회원님을 위한 추천</p>
                    </span>
                    <a href="#@">팔로우</a>
                  </li>
                  <li>
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                      alt="이미지"
                    />
                    <span>
                      <h5>minbrow1</h5>
                      <p>회원님을 위한 추천</p>
                    </span>
                    <a href="#@">팔로우</a>
                  </li>
                  <li>
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                      alt="이미지"
                    />
                    <span>
                      <h5>ho_rok3</h5>
                      <p>회원님을 위한 추천</p>
                    </span>
                    <a href="#@">팔로우</a>
                  </li>
                  <li>
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                      alt="이미지"
                    />
                    <span>
                      <h5>wuiloject</h5>
                      <p>회원님을 위한 추천</p>
                    </span>
                    <a href="#@">팔로우</a>
                  </li>
                  <li>
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                      alt="이미지"
                    />
                    <span>
                      <h5>go_hongcon</h5>
                      <p>회원님을 위한 추천</p>
                    </span>
                    <a href="#@">팔로우</a>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default MainJW;
