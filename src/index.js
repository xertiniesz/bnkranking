import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IgPages from './pages/igPages/igPages';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const AppWithRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={IgPages} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
