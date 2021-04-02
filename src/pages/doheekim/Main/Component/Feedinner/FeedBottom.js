import React from 'react';
import './FeedBottom.scss';
import { FaRegHeart} from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';



class FeedBottom extends React.Component {
    render() { 
        return ( 
            <div className="feeds-bottom">
                <ul className="feeds-bottom-flex">
                    <li className="feeds-icon">
                        <ul className="feeds-iconbox">
                            <li className="heart-btn"><button><FaRegHeart /></button></li>
                            <li className="comment-btn"><button><FaRegComment /></button></li>
                            <li className="share-btn"><button><FaRegShareSquare /></button></li>
                        </ul>
                    </li>
                    <li className="bookmark">
                        <button><FaRegBookmark /></button>
                    </li>
                </ul>
                <div className="heart-count">
                    <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/155180730_424134145319091_2244618473151617561_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jkEKojtr85AAX-RveBi&edm=AOG-cTkAAAAA&ccb=7-4&oh=7f7b1c626d17579c1586680935296ee6&oe=608C1C0B&_nc_sid=282b66" alt="좋아요누른사람사진"/>
                    <p><span className="bold">j_vely_s2</span>님 <span>외 121명</span>이 좋아합니다</p>
                </div>
                <ul className="content-write">
                    <li>
                        <span className="chat-id">_dodo_hee</span>
                        <span className="chat-content">까눌레 엉엉😭</span>
                    </li>
                    {/* {this.state.commentList.map((comm, idx) => {
                    return <li key={idx}>{comm}</li>})} */}
                </ul>
                <p className="time">7시간 전</p>
            </div>
        );
    }
}
         
 
export default FeedBottom;