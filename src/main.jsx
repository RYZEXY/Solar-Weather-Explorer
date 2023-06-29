import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolarEventDetails from "./components/SolarEventDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App name="Solar Weather" testMode={false} />} />
        <Route path="/event/:type/:time/:id" element={<SolarEventDetails />} />
        <Route path="*" element={<><h1>Uh oh, 404. Go back.</h1></>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
