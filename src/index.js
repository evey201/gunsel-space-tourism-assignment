import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./assets/index.css";
import { App } from "./App";

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </React.StrictMode>

);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
