import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page_404 from "./Page_404";


class App extends React.Component{
  render(){
  return (
    <Router>
    <div >  
      <Navbar />
      
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/404" component={Page_404}></Route>
      </Switch>

    </div>
    </Router>
  );

  }}

export default App;
