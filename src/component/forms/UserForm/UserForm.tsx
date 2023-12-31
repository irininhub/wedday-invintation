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
                        fluid
                        className="p-0 d-flex align-items-center justify-content-between"
                    >
                        <TooltipComponent title="Тут необходимо ввести данные о члене семьи (имя и отчество*)">
                            <Form.Control
                                placeholder="Введите имя члена семьи"
                                {...methods.register(`persons.${index}.name`)}
                                className="my-4 w-75"
                            />
                        </TooltipComponent>
                        <Container className="p-0 w-25 d-flex align-items-center justify-content-end">
                            {fields.length > 1 && (
                                <RemoveFieldsComponent
                                    tooltip_title="Вы не сможете пойти?😓😓"
                                    handlerClick={() => remove(index)}
                                />
                            )}
                            {index === fields.length - 1 && (
                                <AddFieldsComponent
                                    tooltip_title="Мы будем рады видеть кого-то еще...😃😃"
                                    handlerClick={() =>
                                        append({ id: uuidv4(), name: "" })
                                    }
                                />
                            )}
                        </Container>
                    </Container>
                );
            })}
        </FormProvider>
    );
};
