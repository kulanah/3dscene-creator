import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jsonObj from '../package.json';

//react components
import VisibleThreeDScene from './components/VisibleThreeDScene';

import { Provider } from 'react-redux';

import store from './store';

const router = (
  <Provider store={store}>
    <div id='sceneDiv'>
      <VisibleThreeDScene/>
      <p>Version: {jsonObj.version}</p>
    </div>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));