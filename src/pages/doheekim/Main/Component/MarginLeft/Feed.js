import React from 'react';
import './Feed.scss';
import FeedHeader from '../Feedinner/FeedHeader';
import FeedBottom from '../Feedinner/FeedBottom';
import CommentWrite from '../Feedinner/CommentWrite';

class Feed extends React.Component {
    render() { 
        return ( 
            <div className="feeds">
                <article>
                    <FeedHeader></FeedHeader>
                    <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/147433190_1080989829067597_3410425774798521157_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4eaa4k_pRbMAX-6ykCQ&edm=AP_V10EAAAAA&ccb=7-4&oh=3488aecc9c05d6f705bbb3877660aaf6&oe=6088F135&_nc_sid=4f375e" alt="피드사진"/>
                    <FeedBottom></FeedBottom>
                    <CommentWrite></CommentWrite>
                </article>
            </div>
         );
    }
}
 
export default Feed;