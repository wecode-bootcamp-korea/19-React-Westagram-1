import { Component } from "react"; // named export vs. default export
import Content from "./Content";
import "./Main.scss";

class MainJW extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      commentList: [],
    };
  }

  contentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  addContent = () => {
    const { commentList } = this.state;
    const newCommentList = [
      ...commentList,
      {
        userId: this.userId,
        content: this.state.content,
      },
    ];

    this.setState({
      commentList: newCommentList,
      content: "", //새롭게 받아올 property
    });
  };

  // addContent = () => {
  //   const { commentList } = this.state;
  //   this.setState({
  //     commentList: [
  //       ...commentList,
  //       {
  //         userId: this.userId,
  //         content: this.state.content,
  //       },
  //     ],
  //     content: "", //새롭게 받아올 property
  //   });
  // };

  addContent = () => {
    this.setState({
      commentList: this.state.commentList.concat([
        {
          userId: "dodo",
          content: this.state.content,
        },
      ]),
      content: "", //새롭게 받아올 property
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.addContent();
    }
  };

  // state = {  }
  render() {
    return (
      <div className="mainJW">
        <nav className="nav">
          <h4>Westagram</h4>
          <div className="main_search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>

          <div className="nav_icons">
            <i className="fas fa-home" onclick="#"></i>
            <i className="far fa-paper-plane" onclick="#"></i>
            <i className="far fa-compass" onclick="#"></i>
            <i className="far fa-heart" onclick="#"></i>
            <span onclick="location.href='#'">
              <img
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                alt="이미지"
              />
            </span>
          </div>
        </nav>
        <div className="main_all">
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
                <div className="post_header">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <span>
                    <p className="post_name">summer_01</p>
                    <p className="city">NYC</p>
                  </span>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="post_img">
                  <img
                    src="https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1322&q=80"
                    alt="이미지"
                  />
                </div>
                <div className="post_icon">
                  <span>
                    <i className="fas fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                  <i className="far fa-bookmark"></i>
                </div>
                <div className="post_like">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                    alt="이미지"
                  />
                  <p>님 외 8명이 좋아합니다.</p>
                </div>
                <div className="post_text">
                  <h5>summer_01</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi est neque omnis illum quidem ipsum reiciendis, natus ut
                    iusto, unde minus, in voluptas nemo minima necessitatibus?
                    Cupiditate sed mollitia nemo.
                  </p>
                </div>
                <div className="post_review">
                  <ul>
                    {this.state.commentList.map((commentText) => {
                      return (
                        <Content
                          userId={commentText.userId}
                          content={commentText.content}
                        />
                      );
                    })}

                    {/* {this.state.commentList.map((commentText) => {
                      return <Content contentValue={commentText} />;
                    })} */}

                    {/* //리턴없이 로직
                    {this.state.commentList.map((commentText) => (
                      <li>{commentText.content}</li>
                    ))}   */}
                  </ul>
                  <input
                    className="post_review_input"
                    type="text"
                    placeholder="댓글 달기 ..."
                    value={this.state.content}
                    onChange={this.contentChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </div>
              </section>
            </article>

            <article className="sidebar">
              <section className="sidebar01">
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu-5wYZxIpZOgJh5ZS4YIj9YtBMhSA1hn7578X5A=s32-c-mo"
                  alt="이미지"
                />
                <p>01__9_7</p>
                <a href="#">전환</a>
              </section>

              <section className="sidebar02">
                <div className="sidebar02_1">
                  <p>회원님을 위한 추천</p>
                  <a href="#">모두보기</a>
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
                      <a href="#">팔로우</a>
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
                      <a href="#">팔로우</a>
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
                      <a href="#">팔로우</a>
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
                      <a href="#">팔로우</a>
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
                      <a href="#">팔로우</a>
                    </li>
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default MainJW;
