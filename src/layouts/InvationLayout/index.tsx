import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

interface IProps {
    children: ReactElement;
}

export const InvationLayout: FC<IProps> = ({ children }) => {
    return (
        <Container fluid className="h-100 overflow-auto">
            {children}
        </Container>
    );
};
