import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style'
import { Globalstyle2} from './statics/iconfont/iconfont'


ReactDOM.render(    
  <Fragment> 
    <App />
    <Globalstyle />
    <Globalstyle2 />
  </Fragment> ,
  document.getElementById('root')
);
