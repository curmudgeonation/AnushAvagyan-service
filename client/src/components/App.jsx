import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import { Redirect } from "react-router-dom";

//import Profile from './components/Profile.jsx';
import Host from './Host.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
      host: null
    }

    this.changeToHostView = this.changeToHostView.bind(this);
  }
  componentDidMount(){
    // console.log('I am in component did monut!!')

    $.ajax({
      url: 'http://127.0.0.1:3001/7',
      type: 'GET',
      success: (data) => {
        this.setState({
          host: data
        });

      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    })
  }

  changeToHostView(host) {
    // this.setState({
    //   redirect: "/host-details-page",
    //   host: host
    // });
  }

  renderView() {
    const {host} = this.state;

    if (host) {
      return <Host host={this.state.host} onClick={(host) => this.changeToHostView(host)} />
    }
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }
    // console.log('rhdjfgj', this.state);
    return (
      <div>
        <h1>Test</h1>
        <div className="main">
          {this.renderView()}
        </div>



      </div>
    )
  }
}

export default App;