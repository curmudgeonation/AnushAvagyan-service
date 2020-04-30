import React, { useState } from "react";




import {
  Cols, Stats
} from './styledComponents.jsx'




const Reviews = (props) => (
  <Cols>
    <tr>
    <Stats><span className="fa fa-star checked"></span> {props.reviews} Reviews </Stats>
    {props.verified && <Stats><i className="fa fa-check-circle checked"></i> Verified </Stats>}
    {props.superhost &&
      <Stats><img src='../././statsHostIcon.png' /> Superhost </Stats>
      }

    </tr>


  </Cols>
)



export default Reviews;