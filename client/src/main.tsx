import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutProvider } from "components/helpers/layoutProvider/layoutProvider.tsx";
import App from "./App.tsx";
import "./styles/index.scss";
import "react-tooltip/dist/react-tooltip.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LayoutProvider>
            <App />
        </LayoutProvider>
    </StrictMode>,
);
