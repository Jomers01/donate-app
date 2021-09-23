import { HashRouter as Router, Switch } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Inicio from "../components/inicio/Inicio";
import Welcome from "../components/sign_in/Welcome";
import "../styles/styles.css";
import Register from "../components/sign_in/Register";
import Login from "../components/sign_in/Login";

function AppRouter() {
  const isAuth = false;

  return (
    <Router>
      <Switch>
        <PublicRouter exact path="/auth" component={Welcome} isAuthenticated={isAuth} />
        <PublicRouter exact path="/auth/register" component={Register} isAuthenticated={isAuth} />
        <PublicRouter exact path="/auth/login" component={Login} isAuthenticated={isAuth} />
        <PrivateRouter exact path="/" component={Inicio} isAuthenticated={isAuth} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
