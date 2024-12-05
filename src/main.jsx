import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import UsersSearch from "./components/UsersSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search/users" element={<UsersSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
