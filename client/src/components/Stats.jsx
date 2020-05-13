import React, { useState } from "react";




import {
  Cols, StatsData
} from './styledComponents.jsx'




const Stats = (props) => (
  <Cols>
    <tr>
    <StatsData><span className="fa fa-star checked"></span> {props.reviews} Reviews </StatsData>
    {props.verified && <StatsData><i className="fa fa-check-circle checked"></i> Verified </StatsData>}
    {props.superhost &&
      <StatsData><img src='http://localhost:3001/assets/statsHostIcon.png' /> Superhost </StatsData>
      }

    </tr>


  </Cols>
)



export default Stats;