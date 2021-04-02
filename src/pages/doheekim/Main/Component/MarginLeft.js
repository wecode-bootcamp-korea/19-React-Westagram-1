import React from 'react';
import './MarginLeft.scss';
import Story from './MarginLeft/Story';
import Feed from './MarginLeft/Feed';

class MarginLeft extends React.Component {
    render() { 
        return ( 
            <MarginLeft>
                <Story></Story>
                <Feed></Feed>
            </MarginLeft>
         );
    }
}
 
export default MarginLeft;