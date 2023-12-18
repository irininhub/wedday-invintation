import { FC, useEffect } from "react";
import { FamilyType } from "../../types";
import { useGetPersonsName } from "../../hooks/useGetPersonsName";

interface IProps {
    persons: FamilyType[] | null;
}

export const PresentationComponent: FC<IProps> = ({ persons }) => {
    const { text, getString } = useGetPersonsName();

    useEffect(() => {
        if (!!persons) getString(persons);
    }, [persons]);

    return <div>{text}</div>;
};
