import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register/index";

export function PageLoader() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route exact path={["/login", "/"]} component={Login} />
      </Switch>
    </Router>
  );
}
