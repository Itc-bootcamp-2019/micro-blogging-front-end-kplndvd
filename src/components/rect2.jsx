
import React from "react"

const Rect2 = (props) => {
    const {TwitList} = props

    
return (
<div>
<div>
  
{TwitList.map(Tweet => (
  
    <div className="rectangle2" key={Tweet.date}> <p className="innerText">{Tweet.content} </p>  
<span className="userNameinTweet">User Name</span>  <span className="time_date">{Tweet.date}</span>
    
    </div>
  ))}
</div>
</div>
)
}
export default Rect2 