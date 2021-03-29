import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from 'components/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
