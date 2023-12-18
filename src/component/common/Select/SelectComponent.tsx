import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";
import { Status } from "../../../constants/Select";
import { EStatusInvation } from "../../../types";

interface IProps {
    value: string;
    handlerChange: (value: EStatusInvation) => Promise<void>;
    type?: "status";
}

export const SelectComponent: FC<IProps> = ({
    value,
    handlerChange,
    type = "status",
}) => {
    const fields = {
        status: Status,
    };
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handlerChange(event.target.value as EStatusInvation);
    };

    return (
        <Form.Select aria-label="Default select example" onChange={onChange}>
            <option>{value}</option>
            {fields[type]
                .filter((el) => el !== value)
                .map((el) => (
                    <option key={el} value={el}>
                        {el}
                    </option>
                ))}
        </Form.Select>
    );
};
