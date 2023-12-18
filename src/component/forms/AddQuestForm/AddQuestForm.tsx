import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormProvider, useFieldArray, UseFormReturn } from "react-hook-form";
import { Container, Form } from "react-bootstrap";
import {
    AddFieldsComponent,
    RemoveFieldsComponent,
    TooltipComponent,
} from "../../../component";
import { InputsType } from "../../../types";

interface IProps {
    methods: UseFormReturn<InputsType>;
}

export const AddQuestForm: FC<IProps> = ({ methods }) => {
    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "persons",
    });
    return (
        <FormProvider {...methods}>
            <TooltipComponent title="Тут необходимо ввести фамилию">
                <Form.Control
                    placeholder="Введите фамилию семьи"
                    {...methods.register(`surname`)}
                />
            </TooltipComponent>
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
                                    handlerClick={() => remove(index)}
                                />
                            )}
                            {index === fields.length - 1 && (
                                <AddFieldsComponent
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
