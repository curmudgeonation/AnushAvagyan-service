import React, { useState } from "react";
var moment = require('moment');
import ReadMore from './ReadMoreButton.jsx';



import {
  Avatar, Image, Icon, Title, Date, Name, Headline
} from './styledComponents.jsx'




const Host = (props) => (
  <div>
     <div>
    <Avatar>
      <Image src={props.host.avatarUrl} />
      {props.host.superhost &&
      <Icon src='../././icon.png'/>
      }
    </Avatar>
    <Title>
    <Name>Hosted by {props.host.name}</Name>
    <Date>Joined in {moment(props.host.joined_at).format("MMMM YYYY")}</Date>

    </Title>

    <div className="info">
      <ReadMore less={props.host.descShort} more={props.host.description}/>

      {props.host.duringStay &&
      <div>
    <Headline>During your stay</Headline>

    <ReadMore less={props.host.duringStayLess} more={props.host.duringStay}/>
    </div>}

    </div>

    {props.host.superhost &&
        <div>
          <Headline>{props.host.name} is a Superhost</Headline>
        <div className="superhost-desc">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>

        </div>
      }


  </div>

  </div>
)



export default Host;