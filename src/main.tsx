import React from 'react'
import ReactDOM, { Root } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'



const root: Root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
