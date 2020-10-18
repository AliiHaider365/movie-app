import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navigation({movie}) {

  const history = useHistory()
  return (
    <div className="navigation-Container">
      <div className="navigation-content">
        <Link onClick={()=>{ history.push('/')}}>
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movie}</p>
      </div>
    </div>
  );
}

export default Navigation;
