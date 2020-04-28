import React from 'react';
import { ReadMore } from './styledComponents.jsx'

class ReadMoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full: false
    }

    this.showMoreOrLess = this.showMoreOrLess.bind(this);
  }

  changeView() {
    this.setState({
      full: true
    });
  }

  showMoreOrLess() {
    if (this.props.less && !this.state.full) {
      return <div className="description">{this.props.less}...<ReadMore onClick={() => this.changeView()}>read more</ReadMore></div>
    } else {
      return <div className="description">{this.props.more}</div>
    }
  }

  render() {
    return (
      <div>
        {this.showMoreOrLess()}
      </div>
  )}


  }





export default ReadMoreButton;
