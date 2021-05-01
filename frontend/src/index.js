import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import thunk from "redux-thunk";
import history from "./history";
import rootReducer from "./reducers";
import { fetchAuthenticated } from "./actions/account";
import Root from "./components/Root";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import AccountDragons from "./components/AccountDragons";
import "./index.css";
import PublicDragons from "./components/PublicDragons";

// const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// store.dispatch(fetchPublicDragons());

const AuthRoute = (props) => {
  if (!store.getState().account.loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  const { component, path } = props;

  return <Route path={path} component={component} />;
};

store.dispatch(fetchAuthenticated()).then(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Root} />

          <AuthRoute path="/account-dragons" component={AccountDragons} />
          <AuthRoute path="/public-dragons" component={PublicDragons} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});
