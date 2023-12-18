import { FC } from "react";
import { Trash } from "react-bootstrap-icons";
import { TooltipComponent } from "../Tooltip/TooltipComponent";

interface IProps {
    tooltip_title?: string;
    handlerClick: () => void;
}

export const RemoveFieldsComponent: FC<IProps> = ({
    handlerClick,
    tooltip_title = "Удалить члена семьи",
}) => {
    return (
        <TooltipComponent title={tooltip_title}>
            <Trash
                color="var(--delete-color)"
                size={30}
                onClick={handlerClick}
            />
        </TooltipComponent>
    );
};
