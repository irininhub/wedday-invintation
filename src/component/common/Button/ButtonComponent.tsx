import { FC } from "react";
import { TooltipComponent } from "../Tooltip/TooltipComponent";
import { Button } from "react-bootstrap";

interface IProps {
    title: string;
    text: string;
    handlerSubmit: () => void | Promise<void>;
    variant?: "success" | "danger";
    disabled?: boolean;
}

export const ButtonComponent: FC<IProps> = ({
    title,
    text,
    handlerSubmit,
    variant = "primary",
    disabled = false,
}) => {
    return (
        <TooltipComponent title={title}>
            <Button
                variant={variant}
                onClick={handlerSubmit}
                disabled={disabled}
                className="my-2"
            >
                {text}
            </Button>
        </TooltipComponent>
    );
};
