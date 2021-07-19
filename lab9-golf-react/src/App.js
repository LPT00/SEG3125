//import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Stats from './Stats';
import Tips from './Tips';
import Experts from './Experts';
import Goals from './Goals';
import Error from './Error';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path = "/">
                <Home />
              </Route>

              <Route path = "/stats">
                <Stats />
              </Route>

              <Route path = "/tips">
                <Tips />
              </Route>

              <Route path = "/experts">
                <Experts />
              </Route>

              <Route path = "/goals">
                <Goals />
              </Route>

              <Route path = "*">
                <Error />
              </Route>

            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
