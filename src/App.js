import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './components/MainContainer/mainContainer.jsx';
import './App.css';

const My404 = () => {
  return (
    <div>
        <h1>404'd!</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={MainContainer} />
          <Route component={My404} />
        </Switch>
      </div>
    );
  }
}

export default App;
