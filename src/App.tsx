import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "react-bootstrap";

export const App: FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </ThemeProvider>
    );
};
