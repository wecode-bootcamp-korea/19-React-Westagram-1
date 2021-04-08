import React, { Component } from "react";
import Content from "./Content";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      commentList: [],
    };
  }

  componentDidMount() {
    fetch("/data/CommentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentList: data,
        });
      });
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
      //스프레드 함수/ concat()가능
      {
        id:
          commentList.length === 0
            ? 1
            : commentList[commentList.length - 1].id + 1,
        userId: "wecodejw",
        content: this.state.content,
      },
    ];

    this.setState({
      commentList: newCommentList,
      content: "", //새롭게 받아올 property
    });
  };

  // 수정 전 함수
  //   addContent = () => {
  //     const { commentList } = this.state;
  //     this.setState({
  //       commentList: [
  //         ...commentList,
  //         {
  //           userId: this.userId,
  //           content: this.state.content,
  //         },
  //       ],
  //       content: "", //새롭게 받아올 property
  //     });
  //   };

  addContent = () => {
    this.setState({
      commentList: this.state.commentList.concat([
        {
          userId: "dodoharu",
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

  render() {
    // const {
    //   header_img,
    //   name,
    //   city,
    //   main_img,
    //   like_img,
    //   text,
    // } = this.props.feedObj;
    // console.log(this.props);
    // console.log("teste");

    // let { header_img, name, city } = this.props.feedObj;
    return (
      <>
        <li>
          <div className="post_header">
            <img src={this.props.header_img} />
            <span>
              <p className="post_name"> {this.props.name} </p>
              <p className="city">{this.props.city}</p>
            </span>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="post_img">
            <img src={this.props.main_img} alt="메인이미지" />
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
            <img src={this.props.like_img} alt="좋아요한사람이미지" />
            <p>님 외 8명이 좋아합니다.</p>
          </div>
          <div className="post_text">
            <h5>{this.props.name}</h5>
            <p>{this.props.text}</p>
          </div>
          <div className="post_review">
            <ul>
              {this.state.commentList.map((commentText) => {
                const { userId, content, id } = commentText;
                return <Content key={id} userId={userId} content={content} />;

                //key값은 배열 형태를 map매서드로 변환할때
                // map매서드 안에 ex)li끼리 엉키지않게 유니크한 고유값 넣어줌 ex)index
                // 결국 key값도 userId/content처럼 반복하니까
                // return <div>{commentText}</div>
              })}

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
        </li>
      </>
    );
  }
}

export default Feeds;
