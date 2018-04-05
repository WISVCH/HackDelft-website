import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500");
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
