import { useMemo } from "react";
import { Button } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { SelectComponent } from "../../../component";

import { useUpdateFamily } from "../../../hooks/useUpdateFamily";

import { type MRT_ColumnDef } from "material-react-table";
import { EStatusInvation, FamilyType } from "../../../types";

export const useColumns = () => {
    const { updateFamily } = useUpdateFamily();
    const handlerChange = async (docId: string, value: EStatusInvation) => {
        updateFamily(docId, { status: value });
    };

    const copyLink = (docId: string, status: EStatusInvation) => {
        status === EStatusInvation.CREATE &&
            updateFamily(docId, { status: EStatusInvation.SENDED });
    };

    const columns = useMemo<MRT_ColumnDef<FamilyType>[]>(
        () => [
            {
                accessorKey: "surname",
                header: "Фамилия семьи",
            },
            {
                accessorKey: "name",
                header: "Имя члена семьи",
            },
            {
                accessorKey: "status",
                header: "Статус",
                Cell: ({ cell }) => {
                    if (cell.row.original.name) return;
                    return (
                        <SelectComponent
                            value={cell.getValue() as string}
                            handlerChange={(value) =>
                                handlerChange(
                                    cell.row.original?.docId as string,
                                    value,
                                )
                            }
                        />
                    );
                },
            },
            {
                accessorKey: "link",
                header: "Скопировать приглашение",
                Cell: ({ cell }) => {
                    if (cell.row.original.name) return;
                    return (
                        <CopyToClipboard text={cell.getValue() as string}>
                            <Button
                                onClick={() =>
                                    copyLink(
                                        cell.row.original?.docId as string,
                                        cell.row.original
                                            .status as EStatusInvation,
                                    )
                                }
                                variant="primary"
                            >
                                Copy Link
                            </Button>
                        </CopyToClipboard>
                    );
                },
            },
        ],
        [],
    );

    return { columns };
};
