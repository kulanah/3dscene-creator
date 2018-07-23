import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react components
import VisibleThreeDScene from './components/VisibleThreeDScene';

import { Provider } from 'react-redux';

import store from './store';

const router = (
  <Provider store={store}>
    <div id='sceneDiv'>
      <VisibleThreeDScene/>
    </div>
  </Provider>
);

document.title = ('3D Scene Creator');

ReactDOM.render(router, document.getElementById('root'));