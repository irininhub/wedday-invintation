import { FC, useEffect } from "react";
import { useGetFamilies } from "../hooks/useGetFamilies";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { useColumns } from "../hooks/useColumns";

export const AnalysisModule: FC = () => {
    const { columns } = useColumns();
    const { families, getFamilies } = useGetFamilies();

    const table = useMaterialReactTable({
        columns,
        data: families,
        enableExpanding: true,
        getSubRows: (originalRow) => originalRow.persons,
    });

    useEffect(() => {
        getFamilies();
    }, []);

    return <MaterialReactTable table={table} />;
};
