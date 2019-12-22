import React from 'react';
import MyAppContext from '../context/context'

const TweetsList = props => {

      return (
        <MyAppContext.Consumer>
          {({ addTweet, Tweets }) => (
            <ul>
              {Tweets.map(Tweet => (
                <li key={Tweet}>{Tweet}</li>
              ))}
            </ul>
          )}
        </MyAppContext.Consumer>
      );
    };
    
    export default TweetsList;