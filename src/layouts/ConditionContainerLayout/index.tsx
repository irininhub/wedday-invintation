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
    if (condition) return <Container fluid>{children}</Container>;
    return null;
};
