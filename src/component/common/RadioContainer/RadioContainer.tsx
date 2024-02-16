import { FC } from "react";
import { Form } from "react-bootstrap";
import s from "./styles.module.scss";

interface IProps {
    header: string;
    items: Array<{ id: number; value: string }>;
    checkedValue: string[];
    changeForm: (value: boolean, id: string) => void;
}

export const RadioContainer: FC<IProps> = ({
    header,
    items,
    changeForm,
    checkedValue,
}) => {
    return (
        <Form className={s.container}>
            <div className={s.header}>{header}</div>
            {items.map((el) => (
                <Form.Check
                    checked={!!checkedValue?.find((e) => e === el.value)}
                    size={100}
                    key={el.id}
                    type="checkbox"
                    label={el.value}
                    onChange={(e) => changeForm(e.target.checked, el.value)}
                />
            ))}
        </Form>
    );
};
