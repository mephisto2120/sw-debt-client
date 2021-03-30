import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from 'App';
import Welcome from 'components/Welcome';
import Signup from 'components/Signup';

const store = createStore(
  reducers,
  {}
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}/>
        <Route path="/" component={Signup}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
