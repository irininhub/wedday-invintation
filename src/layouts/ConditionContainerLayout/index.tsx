import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

interface IProps {
    condition: boolean;
    children: ReactElement | ReactElement[];
}

export const ConditionContainerLayout: FC<IProps> = ({
    condition,
    children,
}) => {
    if (condition) return <Container className="d-flex flex-column align-items-center" fluid>{children}</Container>;
    return null;
};
