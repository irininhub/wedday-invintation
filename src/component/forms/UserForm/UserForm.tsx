import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    AddFieldsComponent,
    RemoveFieldsComponent,
    TooltipComponent,
} from "../../../component";
import { FormProvider, useFieldArray, UseFormReturn } from "react-hook-form";
import { InputsType } from "../../../types";
import { Container, Form } from "react-bootstrap";
import s from "./styles.module.scss";
import { AlcoholItems, EatItems } from "../../../constants/Form";
import { RadioContainer } from "../../common/RadioContainer/RadioContainer";

interface IProps {
    methods: UseFormReturn<InputsType>;
}

export const UserForm: FC<IProps> = ({ methods }) => {
    const [checkedEat, setCheckedEat] = useState<string[]>([]);
    const [checkedAlcohol, setCheckedAlcohol] = useState<string[]>([]);
    const [other, setOther] = useState<string>();

    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "persons",
    });

    const changeForm = (value: boolean, id: string, key: "eat" | "alcohol") => {
        let items = methods.getValues(`form.${key}`);
        if (value) items.push(id);
        if (!value) {
            items = items.filter((el) => el !== id);
        }
        const obj = methods.getValues("form");
        methods.setValue("form", {
            ...obj,
            [key]: items,
        });
    };

    const changeFormOther = (value: string) => {
        methods.setValue("form", {
            alcohol: methods.getValues("form.alcohol"),
            eat: methods.getValues("form.eat"),
            other: value,
        });
    };

    useEffect(() => {
        const subscription = methods.watch((value, { name }) => {
            if (name === "form") {
                setCheckedEat(value.form?.eat as string[]);
                setCheckedAlcohol(value.form?.alcohol as string[]);
                setOther(value.form?.other);
            }
        });
        return () => subscription.unsubscribe();
    }, [methods.watch]);

    return (
        <FormProvider {...methods}>
            <Container style={{ margin: "20px 0" }} className={s.formContainer}>
                <RadioContainer
                    header="Есть ли у Вас особые предпочтения по еде?"
                    items={EatItems}
                    checkedValue={checkedEat}
                    changeForm={(value: boolean, id: string) =>
                        changeForm(value, id, "eat")
                    }
                />
            </Container>
            <Container style={{ margin: "20px 0" }} className={s.formContainer}>
                <RadioContainer
                    header="Какой алкоголь Вы предпочитаете?"
                    items={AlcoholItems}
                    checkedValue={checkedAlcohol}
                    changeForm={(value: boolean, id: string) =>
                        changeForm(value, id, "alcohol")
                    }
                />
            </Container>
            <Container style={{ margin: "20px 0" }} className={s.formContainer}>
                <Form.Group className="mb-3 w-100">
                    <Form.Label className={s.header}>
                        Возможно вы хотите сообщить нам что-то еще?
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={other}
                        onChange={(e) => changeFormOther(e.target.value)}
                    />
                </Form.Group>
            </Container>
            {fields.map((field, index) => {
                return (
                    <Container fluid key={field.id} className={s.formContainer}>
                        <TooltipComponent title="Тут необходимо ввести данные о члене семьи (имя и отчество*)">
                            <Form.Control
                                placeholder="Введите имя члена семьи"
                                {...methods.register(`persons.${index}.name`)}
                                className={s.formControle}
                            />
                        </TooltipComponent>
                        <div
                            className="p-0 w-10 d-flex align-items-center"
                            style={{ width: "90px" }}
                        >
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
