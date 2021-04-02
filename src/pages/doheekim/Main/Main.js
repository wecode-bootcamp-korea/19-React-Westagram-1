
import React, { Component } from 'react';
import './Main.scss';
import './common.css';
import Nav from './Component/Nav';
import MarginLeft from './Component/MarginLeft';
import RecommendHeader from './Component/RecommendHeader';
import RecommendTitle from './Component/RecommendTitle';
import RecommendFriends from './Component/RecommendFriends';
import Footer from './Component/Footer';

//레이아웃 컴포넌트 끝

//메인 컴포넌트

class Main extends Component {
    
    render() { 
        return ( 
            <body>
                <Nav></Nav>
                <main>
                    <MarginLeft>
                    </MarginLeft>
                    <div className="main-right">
                        <RecommendHeader></RecommendHeader>
                        <RecommendTitle></RecommendTitle>
                        <RecommendFriends></RecommendFriends>
                        <Footer></Footer>
                    </div>
                </main>
         </body>
         )
        }
    }

export default Main;
 
