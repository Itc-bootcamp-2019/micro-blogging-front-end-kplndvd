import Desktop from 'C:/dev/web/Assignments/assigment7/micro-blog/src/components/desktop'
import React from 'react'
import './profileStyle.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userNameTyping: ''
    }
  }

  componentDidMountMount() {
    const userNameUpdate = JSON.parse(localStorage.getItem('Profile'));
    this.setState({
      username: userNameUpdate
    })
  }

  handleNameChange(event) {
    const NameType = event.target.value
    this.setState({ userNameTyping: NameType })
  }

  handleSaveSubmit(event) {
    let userNameUpdate = this.state.userNameTyping;
    localStorage.setItem('Profile', JSON.stringify(userNameUpdate));
    this.setState({ username: userNameUpdate });
  }


  render() {
    return (
      <div>

        <p className="profile-header">Profile</p>
        <p className="user-header">User Name</p>
        <input className="typeBox" type="text" placeholder=" Type in user name" onChange={(event) => this.handleNameChange(event)} />
        <button type="submit" className="saveButton saveButtonText" onClick={(event) => this.handleSaveSubmit(event)}>Save</button>
      </div>
    )
  }
}

export default Profile