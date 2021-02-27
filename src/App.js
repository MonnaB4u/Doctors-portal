
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from "./Component/Home/Navbar/Navbar";

function App() {
  return (
    <div>
     <Router>
 
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>

        </Switch>

    </Router>
    </div>
  );
}

export default App;
