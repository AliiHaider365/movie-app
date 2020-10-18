import React from 'react';
import FontAwesome from 'react-fontawesome';
// import PropTypes from 'prop-types';
// import { calcTime, convertMoney } from '../../helpers';

// import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => (
   <div className=".movieinfobar-outer">
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
       {time ? <span className="movieinfobar-info">
          Running time: {time} min
          {/* {calcTime(time)} */}
        </span> : ""}
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="movieinfobar-info">
          Budget:{budget}
           {/* {convertMoney(budget)} */}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="movieinfobar-info">
          Revenue: {revenue}
           {/* {convertMoney(revenue)} */}
        </span>
      </div>
    </div>
   </div> 
);

// MovieInfoBar.propTypes = {
//   time: PropTypes.number,
//   budget: PropTypes.number,
//   revenue: PropTypes.number,
// }

export default MovieInfoBar;
