import { FC } from "react";
import { TooltipComponent } from "../Tooltip/TooltipComponent";
import { Button } from "react-bootstrap";
import s from "./styles.module.scss";

interface IProps {
    title: string;
    text: string;
    handlerSubmit: () => void | Promise<void>;
    variant?: "success" | "danger" | "dark";
    disabled?: boolean;
    className?: string;
}

export const ButtonComponent: FC<IProps> = ({
    title,
    text,
    handlerSubmit,
    variant,
    className = "",
    disabled = false,
}) => {
    return (
        <TooltipComponent title={title}>
            <Button
                variant={variant}
                onClick={handlerSubmit}
                disabled={disabled}
                className={`my-2 ${s[className]}`}
            >
                {text}
            </Button>
        </TooltipComponent>
    );
};
