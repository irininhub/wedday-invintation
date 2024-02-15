import { FC } from "react";
import { ButtonComponent } from "../../common";

interface IProps {
    title: string;
    text: string;
    handlerSubmit: () => void | Promise<void>;
    variant?: "success" | "danger" | "dark";
    className?: string;
    disabled?: boolean;
}

export const SubmitButton: FC<IProps> = ({
    title,
    text,
    handlerSubmit,
    variant,
    className = "",
    disabled = false,
}) => {
    return (
        <ButtonComponent
            title={title}
            text={text}
            disabled={disabled}
            handlerSubmit={handlerSubmit}
            variant={variant}
            className = {className}
        />
    );
};
