import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react components
import { ThreeDScene } from './components/ThreeDScene';

import { Provider } from 'react-redux';

import store from './store';

const router = (
  <Provider store={store}>
    <div id='sceneDiv'>
      <ThreeDScene store={store.getState()}/>
    </div>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));