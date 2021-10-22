import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <Router>
    <div className="">
      <Navbar />
      <switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      </switch>
    </div>
    </Router>
  );
}

export default App;
