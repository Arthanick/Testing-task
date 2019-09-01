import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import Routes from './routes';
import createStore from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(window.REDUX_STATE, {log: true});

function App() {
  return (
      <Provider store={store}>
        <Router>
          {renderRoutes(Routes)}
        </Router>
      </Provider>
  );
}

export default App;