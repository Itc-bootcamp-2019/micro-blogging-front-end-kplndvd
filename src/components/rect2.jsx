
import React from "react"

class Rect2 extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    const userNameUpdate = JSON.parse(localStorage.getItem('Profile'));
    this.setState({
      username: userNameUpdate,
    })
  }

  render(){
    let tweets = this.props.tweets;
  return(
    <div>
  <div>

    { tweets.map(Tweet => (

      <div className="rectangle2" key={Tweet.date}> <p className="innerText">{Tweet.content} </p>
        <span className="userNameinTweet">{Tweet.userName}</span>  <span className="time_date">{Tweet.date}</span>

      </div>
    ))}

  </div>
    </div >
  )
    }
}

export default Rect2 