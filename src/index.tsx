import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import config from "./aws-exports";


import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

