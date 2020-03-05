import React from 'react';
import './App.css';
import Main from './components/Main';
import AllInfo from './components/AllInfo';
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider}  from  "react-redux";
import store from "./redux/store"


function App() {
  return (
    <Provider  store={store}  > 
    <div className="App">
      <div className="Content">
        <Router>
          <NavBar/>
          <Switch>
           <Route path="/home" render={()=><h1  >اطلاعات خود را تکمیل نمایید</h1> }/>
            <Route path="/profile" component={Main} />
            <Route path="/info" component={AllInfo} />
          </Switch>
        </Router>
      </div>
    </div>
    </Provider>
  );
}

export default App;
