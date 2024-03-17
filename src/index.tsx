import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app/App"

import { Provider } from 'react-redux';
import { store } from './app/store';

import config from "./aws-exports";


import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

