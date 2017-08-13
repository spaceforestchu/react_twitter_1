import React, {Component} from 'react';

class Tweet extends Component {


  constructor(){
    super();

    this.state = {
      username: ''
    }
  }

  searchUser(event){
    event.preventDefault();
    let updatedSearch = Object.assign({}, this.state.username);
    updatedSearch = event.target.value;
    this.setState({
      username: updatedSearch
    });
  }

  submitSearch(event) {
    event.preventDefault();
    this.props.searchUser(this.state.username)
  }


  render(){
    return(
      <div className='col-sm-8 offset-4 centered' style={{marginTop: 50}}>
        <form onSubmit={this.submitSearch.bind(this)}>
          <h2 style={{margin: '0 5'}}>Search your next Twitter User</h2>
          <div className="input-group" style={{width: '50%', marginLeft: 10}}>
            <input id='username' ref='username' onChange={this.searchUser.bind(this)}  type="text" className="form-control" placeholder="Search" />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-outline-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Tweet;
