import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-vh7w6kqhhcrajint.au.auth0.com"
     clientId="NyMeGWdsalUxA6nUoNvL36lZp3MFkP8G"
     authorizationParams={{
      redirect_uri: "https://property-listing-jdyx.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
