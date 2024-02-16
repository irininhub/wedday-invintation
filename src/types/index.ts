import { ChangeEvent } from "react";

export type FamilyType = {
    surname?: string;
    surname_id?: string;
    id?: string;
    name?: string;
    docId?: string;
    persons?: FamilyType[];
    form?: formType;
};

export enum EStatusInvation {
    CREATE = "create",
    SENDED = "sended",
    VIEWED = "viewed",
    RESOLVED = "resolved",
    REJECTED = "rejected",
}

export type formType = {
    eat: string[];
    alcohol: Array<string>;
    other: string;
};

export type InputsType = {
    docId: string;
    surname: string;
    surname_id: string;
    persons: Array<{ id: string; name: string }>;
    form: formType;
    onSubmit: (value: ChangeEvent<HTMLInputElement>) => void;
};
