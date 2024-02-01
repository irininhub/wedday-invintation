import { FC, useEffect, useState } from "react";
import { FamilyType } from "../../types";
import { useGetPersonsName } from "../../hooks/useGetPersonsName";
import styles from "./styles.module.scss";
import { BlueBoxLayout } from "../../layouts/InvationLayout/blueBox";

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
        <BlueBoxLayout>
            <>
                <div className={styles.presentationAppeal}>
                    {commonAppeal} {text}!
                </div>
                <div className={styles.presentationText}>
                    Мы рады сообщить {isSeveral ? "Вам" : "тебе"}, что <span>06.07.2024</span> состоится самое главное торжество в нашей жизни - день нашей
                    свадьбы! Приглашаем
                    {isSeveral ? " Вас" : " тебя"} разделить с нами радость этого незабываемого дня. И стать свидетелями начала нашего нового путешествия!
                </div>
            </>
        </BlueBoxLayout>
    );
};
