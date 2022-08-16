import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import './style.css';


createRoot( document.querySelector('#root') ).render(
  <>
    <h1>Users List</h1>
    <App />
  </>
)