import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/base/Navbar"
import RouteModel from "./models/RouteModel";

const routes: RouteModel[] = [
    new RouteModel("/", Home, 'Home'),
    new RouteModel("/about", About, 'About')
]
function App() {
  return (
    <>
      <Router>
        <Navbar routes={routes}/>
        {/*<Navbar/>*/}
        <Switch>
            {
                routes.map(
                    routeModel =>
                        <Route
                            exact
                            path={routeModel.path}
                            component={routeModel.component}/>
                    )
            }
        </Switch>
      </Router>
    </>
  );
}

export default App;
