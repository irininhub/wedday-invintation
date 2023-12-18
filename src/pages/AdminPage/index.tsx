import { FC } from "react";
import { AdminLayout } from "../../layouts";
import { useLocation } from "react-router-dom";
import { AddQuestModule, AnalysisModule } from "../../modules";

export const AdminPage: FC = () => {
    const locationHash = useLocation().hash;

    return (
        <AdminLayout>
            {locationHash === "#add_quest" ? (
                <AddQuestModule />
            ) : (
                <AnalysisModule />
            )}
        </AdminLayout>
    );
};
