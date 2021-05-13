import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../src/components/header/header.coponent'
import Home from '../src/pages/home/home.component'
import Distributors from '../src/pages/distributors/distributors.component'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/distributors">
            <Distributors />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
