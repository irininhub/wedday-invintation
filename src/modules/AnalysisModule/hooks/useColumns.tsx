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
                Cell: ({ cell }) => {
                    return cell.row.original.persons?.map((el) => (
                        <p key={el.name}>{el.name}</p>
                    ));
                },
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
                accessorKey: "form",
                header: "Комментарий",
                Cell: ({ cell }) => {
                    return <span>{cell.row.original.form?.other}</span>;
                },
            },
            {
                accessorKey: "form",
                header: "Алкоголь",
                Cell: ({ cell }) => {
                    return cell.row.original.form?.alcohol.map((el) => (
                        <p key={el}>{el}</p>
                    ));
                },
            },
            {
                accessorKey: "form",
                header: "Еда",
                Cell: ({ cell }) => {
                    return cell.row.original.form?.eat.map((el) => (
                        <p key={el}>{el}</p>
                    ));
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
