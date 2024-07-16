import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaPadrao from "../src/Paginas/PaginaPadrao";
import "./../src/reset.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
