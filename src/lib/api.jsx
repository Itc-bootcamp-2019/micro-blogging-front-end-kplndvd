
import axios from 'axios';


const Url = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export function GetTweets() {
    return axios.get(Url);
}


export function AddTweets(tweets) {

    return axios.post(Url, { tweet: tweets });
}   