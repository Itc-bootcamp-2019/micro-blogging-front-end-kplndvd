import React from 'react';
import './App.css';
import Desktop from "./components/desktop"
import Rect1 from "./components/rect1"
import Profile from "./pages/profile/profilePage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Tweets: [],

    };
  }

  render() {
    return (
     <Router>
      <div className="App">

        <Desktop />
          <Switch>
            <Route exact path="/">
               <Rect1 />
            </Route>
            <Route exact path="/profile">
               <Profile />
            </Route>
        </Switch>
      </div>
      </Router> 
    );
  }

}

export default App;
