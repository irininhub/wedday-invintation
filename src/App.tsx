import { FC } from "react";
import { Router } from "./routes";
import { ThemeProvider } from "react-bootstrap";

export const App: FC = () => {
    return (
        <ThemeProvider>
            <Router></Router>
        </ThemeProvider>
    );
};
