import React from 'react';
import MyAppContext from '../context/context';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Tweets: '',
      remaining: '10'
    };
  }

  handleNameChange(event) {
    this.setState({ Tweets: event.target.value });
  }

//   oneFortycheck(event){
//     let words = event.target.value.length
//     let toolong 
//     return toolong
//   }

  render() {
    
    const { Tweets } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet, Tweets }) => (
          <div>
            <textarea
              onChange={() =>  console.log("hello")}
            />
            <button onClick={() => addTweet(Tweets)}>Submit</button>
          </div>
        )}
      </MyAppContext.Consumer>
    );
  }
}

export default Tweet;