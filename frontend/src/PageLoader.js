import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import Dashboard from "./Dashboard";
import { useEffect } from "react";

export function PageLoader() {
  useEffect(() => {}, []);
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route exact path={["/login", "/"]} component={Login} />
      </Switch>
    </Router>
  );
}
