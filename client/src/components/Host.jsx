import React, { useState } from "react";
import Description from './Description.jsx';
import Profile from './Profile.jsx';
import Reviews from './Reviews.jsx';



import {
  Bold, Info, ContactHost
} from './styledComponents.jsx'




const Host = (props) => (
  <div>
     <Profile url={props.host.avatarUrl} name={props.host.name} date={props.host.joined_at} superhost={props.host.superhost}/>


    <Info>
      <Reviews superhost={props.host.superhost} reviews={props.host.reviews} verified={props.host.verified}/>
      <Description less={props.host.descShort} more={props.host.description}/>

      {props.host.duringStay &&
      <div>
    <Bold>During your stay</Bold>

    <Description less={props.host.duringStayLess} more={props.host.duringStay}/>
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