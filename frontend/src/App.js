import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupFormPage";
import SpotShow from "./components/SpotShowPage";

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path={'/signup'} />
        <Route path='*' component={Navigation} />
      </Switch>
      
      <Switch>
        <Route exact path={'/spots/:spotId'} component={SpotShow} />
        <Route exact path={'/login'} component={LoginForm} />
        <Route exact path={'/signup'} component={SignupForm} />
        <Redirect to={`/`} />
      </Switch>
    </>
  );
}

export default App;
