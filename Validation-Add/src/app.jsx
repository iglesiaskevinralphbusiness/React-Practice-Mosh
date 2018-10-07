import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./component/navBar";
import Movies from "./component/movies";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import MovieForm from "./component/movieForm";
import NotFound from "./component/notFound";
import LoginForm from "./component/loginForm";
import RegisterForm from "./component/registerForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:id" component={MovieForm} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/rentals" component={Rentals} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
