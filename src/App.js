import React from "react";
import "./Style/App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
// import MovieInfo from "./Component/MovieInfo";
import {Switch,BrowserRouter as Router ,Route} from 'react-router-dom'
import Movie from "./Component/Movie";


function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
    <Router>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" exact component={Movie} />
    </Switch>
    </Router>

    </div>
  );
}

export default App;
