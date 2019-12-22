
import React from 'react';

const MyAppContext = React.createContext({
  Tweets: [],
  addTweet: (tweet) => { }
});

export default MyAppContext;