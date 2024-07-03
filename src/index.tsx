import { createRoot } from 'react-dom/client';
import "./index.css"
import App from "./app/App"

import ReactGA from "react-ga4";
ReactGA.initialize("G-XXXXXXXXXX");

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
