import { FC, useEffect, useState } from "react";
import { FamilyType } from "../../types";
import { useGetPersonsName } from "../../hooks/useGetPersonsName";
import styles from "./styles.module.scss";

interface IProps {
    persons: FamilyType[] | null;
}

export const PresentationComponent: FC<IProps> = ({ persons }) => {
    const { text, getString } = useGetPersonsName();
    const [commonAppeal, setAppeal] = useState("");
    const [isSeveral, setIsSeveral] = useState(true);

    useEffect(() => {
        if (!persons) return;
        getString(persons);
        setIsSeveral(persons.length > 1);
    }, [persons]);

    useEffect(() => {
        const stringForDear = isSeveral ? "Дорогие" : "Дорогая";
        setAppeal(stringForDear);
    }, [isSeveral]);

    return (
        <div className={styles.presentation}>
            <div className={styles.presentationAppeal}>{commonAppeal} {text}!</div>
            <div className={styles.presentationText}>
                Мы рады сообщить {isSeveral ? 'Вам' : 'тебе'}, что 06.07.2024 состоится самое главное
                торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас
                разделить с нами радость этого незабываемого дня.
            </div>
        </div>
    );
};
