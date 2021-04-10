import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

//namsunkim
// import LoginNS from './pages/namsunkim/Login/Login';
// import MainNS from './pages/namsunkim/Main/Main';
// //jaewonhwang
// import LoginJW from './pages/jaewonhwang/Login/Login';
// import MainJW from './pages/jaewonhwang/Main/Main';
// //doheekim
// import LoginDH from './pages/doheekim/Login/Login';
// import MainDH from './pages/doheekim/Main/Main';
//yewonlee
import LoginYW from './pages/yewonlee/Login/Login';
import MainYW from './pages/yewonlee/Main/Main';
//myungjinlee
// import LoginMJ from './pages/myungjinlee/Login/Login';
// import MainMJ from './pages/myungjinlee/Main/Main';


class Routes extends Component {
    render() { 
        return ( 
            <Router>
                <Switch>
                    {/* <Route exact path="/loginns" component={LoginNS} />
                    <Route exact path="/mainns" component={MainNS} />

                    <Route exact path="/loginjw" component={LoginJW} />
                    <Route exact path="/mainjw" component={MainJW} />

                    <Route exact path="/logindh" component={LoginDH} />
                    <Route exact path="/maindh" component={MainDH} /> */}

                    <Route exact path="/loginyw" component={LoginYW} />
                    <Route exact path="/mainyw" component={MainYW} />

                    {/* <Route exact path="/loginmj" component={LoginMJ} />
                    <Route exact path="/mainmj" component={MainMJ} /> */}
                </Switch>
            </Router>
         );
    }
}
 
export default Routes;