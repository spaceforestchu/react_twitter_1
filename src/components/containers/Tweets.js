import React, {Component} from 'react';
import {Tweet} from '../view';
import { Timeline } from 'react-twitter-widgets'

class Tweets extends Component {

  constructor(){
    super();

    this.state = {
      username: 'lenox hill'.replace(/ +/g, '')
    }

    this.searchUser = this.searchUser.bind(this)
  }

  searchUser(username){
    this.setState({
      username: username
    })
  }


  render(){

    return(
      <div className='container-fluid'>
        <Tweet searchUser={this.searchUser}/>
        <div style={{marginLeft: '3%'}}>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: this.state.username
            }}
            options={{
              username: this.state.username,
              height: '850'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Tweets;
