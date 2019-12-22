
import React from "react"
import Rect2 from "./rect2"
import { AddTweets} from "../lib/api.jsx"
import { GetTweets} from "../lib/api.jsx"


class Rect1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedChars: "",
            Tweets: [],
            tooLong: false

        }
    }



    handleTextChange(event) {

        this.setState({ typedChars: event.target.value })
    }

    handleButtonSubmit(event) {

        const Tweet = { content: this.state.typedChars,userName: 'username', date: new Date().toISOString() }
        const updatedTweets = [Tweet, ...this.state.Tweets]
        localStorage.setItem('Tweets', JSON.stringify(updatedTweets))
        this.setState({ Tweets: updatedTweets });
        AddTweets(Tweet)
        
    }

    componentDidMount() {
        const tweets = JSON.parse(localStorage.getItem('Tweets'))
        this.setState({
            Tweets: tweets ? tweets : []
        })
     
    }


    oneFortycheck(event) {
        let toolongtweet = event.target.value.length > 140
        this.setState({ tooLong: toolongtweet })
    }

    clearContents(element) {
        element.value = '';
    }

    twoCalls = e => {
        this.handleTextChange(e)
        this.oneFortycheck(e)
    }


    render() {
        return (
            <div>
                <div>
                    <textarea maxLength="141" className="rectangle1" id="TweetedText" onChange={(event) => this.twoCalls(event)} placeholder="What you have in mind..." />
                    <button disabled={this.state.tooLong} className="tweet_button" type="submit" onClick={(event) => this.handleButtonSubmit(event)}> Tweet </button>
                    {this.state.tooLong && <span className="over_140_error oneFortyBox">The tweet can't contain more than 140 chars. </span>}
                </div>
                <Rect2 TwitList={this.state.Tweets} />
            </div>

        )
    }
}




export default Rect1
