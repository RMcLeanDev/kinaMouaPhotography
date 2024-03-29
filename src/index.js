import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

const render = (Component) => { 
  ReactDOM.render(
  <HashRouter>
    <Component />
  </HashRouter>,
  document.getElementById('root')
  );
}


render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
