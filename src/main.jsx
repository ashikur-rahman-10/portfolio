import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routers";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviders>
            <HelmetProvider>
                <RouterProvider router={router} />
                {/* <App></App> */}
            </HelmetProvider>
        </AuthProviders>
    </React.StrictMode>
);
