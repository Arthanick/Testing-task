import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {Provider} from 'react-redux';
import routes from './routes';
import createStore from './store';
import LoginPage from './pages/LoginPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(window.REDUX_STATE, {log: true});

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem("Token")) ? (<Component {...props} />) : (
        <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Route exact={true} path="/" component={LoginPage} />
          {routes.map(route => (<PrivateRoute key={route.path} path={route.path} component={route.component}/>))}
        </Router>
      </Provider>
  );
}

export default App;