import React from "react";
import { Link } from "react-router-dom";

function Navigation({movie}) {
  return (
    <div className="navigation-Container">
      <div className="navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movie}</p>
        {/* <p>movfsddddddie</p> */}
      </div>
    </div>
  );
}

export default Navigation;
