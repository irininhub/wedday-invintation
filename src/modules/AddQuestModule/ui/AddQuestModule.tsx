import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    HeaderComponent,
    AddQuestForm,
    SubmitButton,
} from "../../../component";
import { Container } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddFamily } from "../hooks/useAddFamily";
import { InputsType } from "../../../types";

export const AddQuestModule: FC = () => {
    const { addFamily, loading } = useAddFamily();

    const { ...methods } = useForm<InputsType>({
        mode: "onBlur",
        defaultValues: {
            surname: "",
            surname_id: uuidv4(),
            persons: [{ id: uuidv4(), name: "" }],
        },
    });

    const { handleSubmit } = methods;
    const onSubmit: SubmitHandler<InputsType> = async ({
        onSubmit,
        ...fields
    }) => addFamily(fields);

    return (
        <Container fluid className="h-100 overflow-auto">
            <HeaderComponent text="Информация о семье" />
            <AddQuestForm methods={methods} />
            <SubmitButton
                title="Добавить всю семью в БД"
                text="Save Family"
                disabled={loading}
                handlerSubmit={handleSubmit(onSubmit)}
            />
        </Container>
    );
};
