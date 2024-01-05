import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

interface IProps {
    children: ReactElement;
}

export const InvationLayout: FC<IProps> = ({ children }) => {
    return (
        <Container fluid className={`${styles.invitationLayout} h-100 overflow-y-auto`}>
            {children}
        </Container>
    );
};
