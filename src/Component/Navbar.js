import React from "react";
import { GiFilmSpool } from 'react-icons/gi';


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <GiFilmSpool/>
           Movie <b className="pro">Pro</b>
        </a>
       
        <a className="navbar-brand">Login</a>
      </nav>
    </>
  );
}

export default Navbar;
