import { FC, ReactElement } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

interface IProps {
    title: string;
    children: ReactElement;
}

export const TooltipComponent: FC<IProps> = ({ title, children }) => {
    return (
        <OverlayTrigger overlay={<Tooltip>{title}</Tooltip>}>
            {children}
        </OverlayTrigger>
    );
};
