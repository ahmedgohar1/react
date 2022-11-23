import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-bootstrap'
import './index.css';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

let AppRouter = createBrowserRouter([
  {
    path: '/', 
    element:<App/>,
    children: [
      { index: true,       element: <Home/>      },
      { path:'portfolio',  element: <Portfolio/> },
      { path:'about',      element: <About/>     },
      { path:'contact',    element: <Contact/>   },
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={AppRouter} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
