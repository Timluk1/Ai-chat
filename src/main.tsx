import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./styles/index.scss";
import "react-tooltip/dist/react-tooltip.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
