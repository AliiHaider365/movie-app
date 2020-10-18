import React from 'react';
// import PropTypes from 'prop-types';

// import NoImage from '../images/no_image.jpg';

import { IMAGE_BASE_URL, POSTER_SIZE} from '../api';
// import { StyledActor } from '../styles/StyledActor';

const Actor = ({ actor }) => (
  <>
  {
    actor.profile_path ?

  <div className="col py-1 pt-5">
  <div className="actors">
    <img 
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          :
          //  NoImage
          ''
      }
      alt="actorthumb"
    />
    <span className="actor-name">{actor.name}</span>
    <span className="actor-character">{actor.character}</span>
  </div>
  </div>: ""}
  </>
);

// Actor.propTypes = {
//   actor: PropTypes.object,
// }

export default Actor;
