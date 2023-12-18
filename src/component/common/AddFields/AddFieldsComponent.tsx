import { FC } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import { TooltipComponent } from "../Tooltip/TooltipComponent";
import styles from "./styles.module.scss";

interface IProps {
    tooltip_title?: string;
    handlerClick: () => void;
}

export const AddFieldsComponent: FC<IProps> = ({
    handlerClick,
    tooltip_title = "Добавить еще одного члена семьи",
}) => {
    return (
        <TooltipComponent title={tooltip_title}>
            <PlusCircle
                color="var(--icon-color)"
                className={styles.add_icon}
                size={30}
                onClick={handlerClick}
            />
        </TooltipComponent>
    );
};
