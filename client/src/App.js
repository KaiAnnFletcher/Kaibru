import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authAction";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Browse from "./pages/Browse";
import Log from "./components/auth/Login";
import Sign from "./components/auth/Signup";
import Logout from "./components/auth/Logout"
import PrivateRoute from "./components/private-route/PrivateRoute";

// import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
// import logo from './logo.svg';
 import './App.css';

//Check for token to keep user logged in
if(localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken();
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());

  //Redirect to login
  window.location.href ="./login";
}
}

class App extends Component {
  render() {
  return (
    <div id='App'>
    <Provider store={store}>
    <Router>
    <div>
    <Wrapper>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/signup" component={Sign} />
    <Route exact path="/login" component={Log} />
    <Route exact path="/mission" component={Mission} />
    <Route exact path="/browse" component={Browse} />
    <Switch>
      <PrivateRoute exact path="/logout" component={Logout} />
    </Switch>
    </Wrapper>
    </div>
    </Router>
    </Provider>
    </div>
  ) 
}
}

export default App;

// return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );