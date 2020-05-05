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
   
  }
  componentDidMount(){

    $.ajax({
      url: 'http://127.0.0.1:3001/listings/' + this.props.id+ '/hosts',
      type: 'GET',
      success: (data) => {

        if (data.description && data.description.length > 180) {
          data.descShort = data.description.substr(0, 180);
        }
        if (data.duringStay && data.duringStay.length > 180) {
          data.duringStayLess = data.duringStay.substr(0, 180);
        }

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
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // }
  }

  render() {

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