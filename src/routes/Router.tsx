import { ReactElement } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { UserPage, AdminPage } from "../pages";
import { paths } from "./paths";

export const Router = (): ReactElement => {
    return (
        <Switch>
            <Route path={paths.HOME} element={<UserPage />} />
            <Route path={paths.USER} element={<UserPage />} />
            <Route path={paths.ADMIN} element={<AdminPage />} />
            <Route path={paths.ADD} element={<AdminPage addQuest />} />
        </Switch>
    );
};
