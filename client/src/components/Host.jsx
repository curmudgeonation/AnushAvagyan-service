import React, { useState } from "react";
import Description from './Description.jsx';
import Profile from './Profile.jsx';
import Stats from './Stats.jsx';



import {
  Bold, Info, ContactHost, Note, NoteIcon
} from './styledComponents.jsx'




const Host = (props) => (
  <div>
     <Profile url={props.host.avatarUrl} name={props.host.name} date={props.host.joined_at} superhost={props.host.superhost}/>


    <Info>
      <Stats superhost={props.host.superhost} reviews={props.host.reviews} verified={props.host.verified}/>

      <Description className='desc' less={props.host.descShort} more={props.host.description}/>

      {props.host.duringStay &&
      <div>
    <Bold className='during-stay-hdln' >During your stay</Bold>

    <Description classname='during-stay' less={props.host.duringStayLess} more={props.host.duringStay}/>
    </div>}



    {props.host.superhost &&
        <div className='superhost-true'>
          <Bold>{props.host.name} is a Superhost</Bold>
        <div className="superhost-desc">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>

        </div>
      }
  </Info>
  <Info>
    <div className='lang'>Language: {props.host.languages}</div>
    <div className='resp-rate'>Response rate: {props.host.responseRate}%</div>
    <div className='resp-time'>Response time: {props.host.responseTime}</div>
    <ContactHost className='contact-button'>Contact host</ContactHost>
    <Note><NoteIcon className='payment-wrg-icon' src='../././paymentNote.png' /> <p className='payment-warning'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app. </p> </Note>
  </Info>


  </div>
)



export default Host;