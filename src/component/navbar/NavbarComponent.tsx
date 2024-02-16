import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";

export const NavbarComponent: FC = () => {
    const location = useLocation();
    return (
        <Navbar expand="sm" data-bs-theme="dark" className={styles.container}>
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="w-100 justify-content-around"
                        defaultActiveKey={`/wedday-invintation#${
                            location.pathname === "/add-quest"
                                ? "add-quest"
                                : "administration-panel"
                        }`}
                    >
                        <Nav.Link href="/wedday-invintation#administration-panel">
                            Анализ
                        </Nav.Link>
                        <Nav.Link href="/wedday-invintation#add-quest">
                            Добавление гостей
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
