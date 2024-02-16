import { FC } from "react";
import { AdminLayout } from "../../layouts";
import { AddQuestModule, AnalysisModule } from "../../modules";

interface IProps {
    addQuest?: boolean;
}

export const AdminPage: FC<IProps> = ({ addQuest }) => {
    return (
        <AdminLayout>
            {addQuest ? <AddQuestModule /> : <AnalysisModule />}
        </AdminLayout>
    );
};
