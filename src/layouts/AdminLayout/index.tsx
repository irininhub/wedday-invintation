import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import { NavbarComponent } from "../../component";

interface IProps {
    children: ReactElement;
}

export const AdminLayout: FC<IProps> = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <Container fluid className={`${styles.admin_page} h-100 m-0`}>
                {children}
            </Container>
        </>
    );
};
