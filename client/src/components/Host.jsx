import React from 'react';
var moment = require('moment');

const Host = (props) => (
  <div>
     <div className="top">
    <div className="avatar">
      <img className="image" src={props.host.avatarUrl} alt="" />
      {props.host.superhost &&
        <img className="icon" src='../././icon.png' />
      }

    </div>
    <div className="title">
    <h2 className="name">Hosted by {props.host.name}</h2>
    <div className="joined">Joined in {moment(props.host.joined_at).format("MMMM YYYY")}</div>

    </div>
    <div className="description">{props.host.description}</div>
    <div>
    <div className="duringStay bold">During your stay</div>
    <div className="duringStay">{props.host.duringStay}</div>

    </div>

    {props.host.superhost &&
        <div>
        <div className="superhost bold">{props.host.name} is a Superhost</div>
        <div className="superhost-desc">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>

        </div>
      }


  </div>

  </div>
)



export default Host;