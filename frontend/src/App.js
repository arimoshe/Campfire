import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupFormPage";

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path={'/signup'} />
        <Route path='*' component={Navigation} />
      </Switch>
      <Switch>
        <Route exact path={'/login'} component={LoginForm} />
        <Route exact path={'/signup'} component={SignupForm} />
      </Switch>
    </>
  );
}

export default App;
