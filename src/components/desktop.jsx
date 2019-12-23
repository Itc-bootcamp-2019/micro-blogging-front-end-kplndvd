
import React from 'react'
import {
       BrowserRouter as Router,
       Switch,
       Route,
       Link
     } from "react-router-dom";

function Desktop(){

return (
<div className="desktop">
          
              <div className="navbar"></div>
              <Link className="navbar_home" to="/">Home</Link>
              <Link className="navbar_profile" to="/profile">Profile</Link>
          
       </div>)
}


     
export default Desktop
