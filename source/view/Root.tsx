import * as React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Map, ActionBar } from './components';
import store from '../store';
import './root.scss';

const Root = () => (
  <Provider store={ store }>
    <div>
      <Map />
      <ActionBar />
    </div>
  </Provider>
);

export default hot(module)(Root);
