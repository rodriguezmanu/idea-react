import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { me } from './actions/user.actions';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();
const token = localStorage.getItem('tokens');

if (token) {
  store.dispatch(me());
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
