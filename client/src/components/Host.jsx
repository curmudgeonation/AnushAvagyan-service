import React from 'react';
var moment = require('moment');

const Host = (props) => (
  <div>
     <div className="top">
    <div className="avatar">
      <img className="image" src={props.host.avatarUrl} alt="" />
      {props.host.superhost &&
        <img className="icon" src='../././dist/icon.png' />
      }

    </div>
    <div className='title'>
    <h2 className="name">Hosted by {props.host.name}</h2>
    <div className="joined">Joined in {moment(props.host.joined_at).format("MMMM YYYY")}</div>

    </div>

  </div>

  </div>
)



export default Host;