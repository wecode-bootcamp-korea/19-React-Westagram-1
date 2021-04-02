import React from 'react';
import './RecommendTitle.scss';

class RecommendTitle extends React.Component {
    render() { 
        return ( 
            <div className="recommend-title">
                <p className="recommend-title-left">회원님을 위한 추천</p>
                <p className="recommend-title-right">모두보기</p>
            </div>
         );
    }
}
 
export default RecommendTitle;