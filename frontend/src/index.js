import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css'; 
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import * as pixaActions from './store/pixabay';
import * as bookingActions from './store/bookings';
import * as reviewActions from './store/reviews';
import { CookiesProvider } from "react-cookie";



const store = configureStore();


if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.pixaActions = pixaActions;
  window.bookingActions = bookingActions;
  window.reviewActions = reviewActions
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  )
}


const renderApplication = () => {
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
}


if (sessionStorage.getItem("X-CSRF-Token") === null || sessionStorage.getItem("currentUser") === null) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}