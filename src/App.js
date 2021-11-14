import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Country from './pages/Country/Country'

function App() {
  return (
    <>
      <Router>
          <Header/>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/country/:id">
                <Country></Country>
              </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
