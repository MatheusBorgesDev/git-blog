import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "./components/header.tsx";
import App from "./pages/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-baseBackground antialiased">
      <Header />
      <App />
    </div>
  </StrictMode>,
);
