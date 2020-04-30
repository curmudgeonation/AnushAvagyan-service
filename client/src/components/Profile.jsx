import React, { useState } from "react";
var moment = require('moment');



import {
  Avatar, Image, Icon, Title, Date, Name, Top
} from './styledComponents.jsx'




const Profile = (props) => (
  <div>
     <Top>
    <Avatar>
      <Image src={props.url} />
      {props.superhost &&
      <Icon src='../././icon.png' />
      }
    </Avatar>
    <Title>
    <Name>Hosted by {props.name}</Name>
    <Date>Joined in {moment(props.date).format("MMMM YYYY")}</Date>

    </Title>
    </Top>

  </div>
)



export default Profile;