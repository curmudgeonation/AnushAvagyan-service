import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import { Redirect } from "react-router-dom";

//import Profile from './components/Profile.jsx';
import Host from './Host.jsx';
import {GlobalStyle} from './styledComponents.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
      host: null
    }

    this.changeToHostView = this.changeToHostView.bind(this);
    this.showMore = this.showMore.bind(this);
  }
  componentDidMount(){
    // console.log('I am in component did monut!!')

    $.ajax({
      url: 'http://127.0.0.1:3001/7',
      type: 'GET',
      success: (data) => {
        if (data[0].description && data[0].description.length > 180) {
          data[0].descShort = data[0].description.substr(0, 180);
        }
        if (data[0].duringStay && data[0].duringStay.length > 180) {
          data[0].duringStayLess = data[0].duringStay.substr(0, 180);
        }

        this.setState({
          host: data[0]
        });
        console.log('this is the stets after req', this.state.host);
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

  showMore(desc) {
    this.setState({
      redirect: "/host-details-page",
      host: host
    });
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
        <GlobalStyle />
        <div className="main">
          {this.renderView()}
        </div>



      </div>
    )
  }
}

export default App;