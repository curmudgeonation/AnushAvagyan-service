import React, { useState } from "react";
var moment = require('moment');
import ReadMore from './ReadMoreButton.jsx';



import {
  Avatar, Image, Icon, Title, Date, Name, Bold, Info, Top, ContactHost
} from './styledComponents.jsx'




const Host = (props) => (
  <div>
     <Top>
    <Avatar>
      <Image src={props.host.avatarUrl} />
      {props.host.superhost &&
      <Icon src='../././icon.png' />
      }
    </Avatar>
    <Title>
    <Name>Hosted by {props.host.name}</Name>
    <Date>Joined in {moment(props.host.joined_at).format("MMMM YYYY")}</Date>

    </Title>
    </Top>

    <Info>
      <ReadMore less={props.host.descShort} more={props.host.description}/>

      {props.host.duringStay &&
      <div>
    <Bold>During your stay</Bold>

    <ReadMore less={props.host.duringStayLess} more={props.host.duringStay}/>
    </div>}



    {props.host.superhost &&
        <div>
          <Bold>{props.host.name} is a Superhost</Bold>
        <div className="superhost-desc">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>

        </div>
      }
  </Info>
  <Info>
    <div>Language: {props.host.languages}</div>
    <div>Response rate: {props.host.responseRate}%</div>
    <div>Response time: {props.host.responseTime}</div>
    <ContactHost>Contact host</ContactHost>
  </Info>

  </div>
)



export default Host;