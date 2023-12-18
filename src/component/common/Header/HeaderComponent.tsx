import { FC } from "react";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.scss";

interface IProps {
    text: string;
}

export const HeaderComponent: FC<IProps> = ({ text }) => {
    return <Form.Label className={styles.header}>{text}</Form.Label>;
};
