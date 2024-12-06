import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import UsersSearch from "./components/pages/UsersSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search/users" element={<Navigate to="/" replace />} />
          <Route path="search/users/:first_name" element={<UsersSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
