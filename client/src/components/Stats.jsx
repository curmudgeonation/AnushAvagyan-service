import React, { useState } from "react";




import {
  Cols, StatsData
} from './styledComponents.jsx'




const Stats = (props) => (
  <Cols>
    <StatsData className='reviews'><span className="fa fa-star checked"></span>{props.reviews} Reviews</StatsData>
    {props.verified && <StatsData className='verified'><i className="fa fa-check-circle checked"></i>Verified</StatsData>}
    {props.superhost &&
      <StatsData className='superhost-stats-copy'><img className='superhost-stats' src='http://localhost:3001/assets/statsHostIcon.png' />Superhost</StatsData>
      }
  </Cols>
)



export default Stats;