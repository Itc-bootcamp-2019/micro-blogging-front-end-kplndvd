import React from 'react';
import './App.css';
import Desktop from "./components/desktop"
import Rect1 from "./components/rect1"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Tweets: []
      
    };
  }



  render() {
    return (
      <div className="App">

        <Desktop />
        <Rect1 />

      </div>
    );
  }

}

export default App;
