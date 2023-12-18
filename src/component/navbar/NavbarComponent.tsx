import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";

export const NavbarComponent: FC = () => {
    return (
        <Navbar expand="sm" data-bs-theme="dark" className={styles.container}>
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="w-100 justify-content-around"
                        defaultActiveKey="#analysis"
                    >
                        <Nav.Link href="#analysis">Анализ</Nav.Link>
                        <Nav.Link href="#add_quest">Добавление гостей</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
