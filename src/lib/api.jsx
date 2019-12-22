
import axios from 'axios';

const baseUrl = 'https://itc-bootcamp-19-dot-charcha-dev.appspot.com';
const createUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export function GetTweets(TweetId) {
    return axios.get(baseUrl + "/" + TweetId);
}


export function AddTweets(tweets) {

    return axios.post(createUrl, { tweet: tweets });
}   