import { Redirect, Route, Switch } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import AccountBookingIndex from "./components/AccountPage/AccountBookingIndex";
import AccountNavigation from "./components/AccountPage/AccountNavigation";
import BookingPage from "./components/BookingPage";
import LoginForm from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import SpotShow from "./components/SpotShowPage";

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path={'/signup'} />
        <Route path={'/account'} component={AccountNavigation} />
        <Route path='*' component={Navigation} />
      </Switch>
      
      <Switch>
        <Route exact path={'/account/trips'} component={AccountBookingIndex} />
        <Route exact path={'/account'} component={AccountPage} />
        <Route exact path={'/booking'} component={BookingPage} />
        <Route exact path={'/spots/:spotId'} component={SpotShow} />
        <Route exact path={'/login'} component={LoginForm} />
        <Route exact path={'/signup'} component={SignupForm} />
        <Route exact path={'/'} component={SplashPage} />
        <Redirect to={`/`} />
      </Switch>
    </>
  );
}

export default App;
