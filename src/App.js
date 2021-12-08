// import Login from './componets/Login/Login';
// import Card from './componets/Card/Card';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Page1</Link>
              </li>

              <li>
                <Link to="/Page2">Page2</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Page2">
              <Page2 />
            </Route>
            <Route path="/">
              <Page1 />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
