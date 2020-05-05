import React, { useState } from "react";
var moment = require('moment');



import {
  Avatar, Image, Icon, Title, Date, Name, Top
} from './styledComponents.jsx'




const Profile = (props) => (
  <div>
     <Top>
    <Avatar>
      <Image className='photo' src={props.url} />
      {props.superhost &&
      <Icon className='icon' src='../././icon.png' />
      }
    </Avatar>
    <Title>
    <Name className='host-name' >Hosted by {props.name}</Name>
    <Date className='date-joined' >Joined in {moment(props.date).format("MMMM YYYY")}</Date>

    </Title>
    </Top>

  </div>
)



export default Profile;