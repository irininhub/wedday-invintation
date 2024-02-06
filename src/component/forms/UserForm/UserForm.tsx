import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    AddFieldsComponent,
    RemoveFieldsComponent,
    TooltipComponent,
} from "../../../component";
import { FormProvider, useFieldArray, UseFormReturn } from "react-hook-form";
import { InputsType } from "../../../types";
import { Container, Form } from "react-bootstrap";
import s from "./styles.module.scss"

interface IProps {
    methods: UseFormReturn<InputsType>;
}

export const UserForm: FC<IProps> = ({ methods }) => {
    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "persons",
    });
    return (
        <FormProvider {...methods}>
            {fields.map((field, index) => {
                return (
                    <Container
                        key={field.id}
                        className={s.formContainer}
                    >
                        <TooltipComponent title="Тут необходимо ввести данные о члене семьи (имя и отчество*)">
                            <Form.Control
                                placeholder="Введите имя члена семьи"
                                {...methods.register(`persons.${index}.name`)}
                                className={s.formControle}
                            />
                        </TooltipComponent>
                        <div className="p-0 w-10 d-flex align-items-center" style={{maxWidth: "90px"}}>
                            {fields.length > 1 && (
                                <RemoveFieldsComponent
                                    tooltip_title="Вы не сможете пойти?😓"
                                    handlerClick={() => remove(index)}
                                />
                            )}
                            {index === fields.length - 1 && (
                                <AddFieldsComponent
                                    tooltip_title="Мы будем рады видеть кого-то еще...😃"
                                    handlerClick={() =>
                                        append({ id: uuidv4(), name: "" })
                                    }
                                />
                            )}
                        </div>
                    </Container>
                );
            })}
        </FormProvider>
    );
};
