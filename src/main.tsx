// This is main.tsx file that renders the App component into the root element of the HTML document.

// Import necessary modules and components
import React from "react";
import ReactDOM from "react-dom/client";
import Preloader from './components/Preloader/Preloader'
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";

// Use ReactDOM to render the App component into the root element of the HTML document
const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Preloader/>
    </Provider>
  </React.StrictMode>
);
