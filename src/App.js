
import React, { Component } from 'react';
import User from "./components/User";
import "./App.css"


class App extends Component {


  render() {
    
    return (

      <div >
        <header className="app-git">
          <h1>react GitHub Project </h1>
        </header>

        <User />

      </div>



    );
  }
}

export default App;