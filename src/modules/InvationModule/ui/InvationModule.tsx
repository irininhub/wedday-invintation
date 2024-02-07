import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    PresentationComponent,
    SubmitButton,
    UserForm,
    ModalComponent,
    InvitationHeader,
    InvitationFooter,
    PlaceComponent,
    TimingInfo,
} from "../../../component";
import { Container, Form } from "react-bootstrap";
import { EStatusInvation, InputsType } from "../../../types";
import { useLocation } from "react-router-dom";
import { useGetFamilyById } from "../hooks/useGetFamilyById";
import { ConditionContainerLayout } from "../../../layouts";
import {
    DangerFromText,
    SuccesFromText,
    UserFormText,
} from "../../../constants/Text";
import { useUpdateFamily } from "../../../hooks/useUpdateFamily";
import styles from "./styles.module.scss";
import { BlueBoxLayout } from "../../../layouts/InvationLayout/blueBox";
import { useLoadScript } from "@react-google-maps/api";
import { LocationComponent } from "../../../component/location/LocationComponent";

const { REACT_APP_GOOGLE_API_KEY } = process.env;

export const InvationModule: FC = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `${REACT_APP_GOOGLE_API_KEY}`,
    });
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [color, setColor] = useState<"success" | "danger">("success");
    const { getFamily, family } = useGetFamilyById();
    const { updateFamily } = useUpdateFamily();

    const { ...methods } = useForm<InputsType>({
        mode: "onBlur",
        defaultValues: {
            ...family,
            persons: family.persons,
        },
    });

    const { handleSubmit } = methods;
    const onSubmit: SubmitHandler<InputsType> = async ({
        onSubmit,
        ...fields
    }) => {
        const status: EStatusInvation =
            color === "success"
                ? EStatusInvation.RESOLVED
                : EStatusInvation.REJECTED;
        setShow(false);
        setText("");
        console.log("fields", fields);
        updateFamily(fields.docId, { persons: fields.persons, status });
        setColor("success");
    };

    useEffect(() => {
        !!location.pathname.slice(1) && getFamily(location.pathname.slice(1));
    }, []);
    useEffect(() => {
        if (!!family.persons) {
            const fields = family.persons?.map(
                (el) => el as { id: string; name: string },
            );
            methods.setValue("persons", fields);
            methods.setValue("docId", family.docId as string);
            updateFamily(family.docId as string, {
                status: EStatusInvation.VIEWED,
            });
        }
    }, [family]);

    const handlerSucces = (type: "success" | "danger") => {
        const text = type === "success" ? SuccesFromText : DangerFromText;
        setColor(type);
        setText(text);
        setShow(true);
    };

    return (
        <Container className={`${styles.wrapper} mb-20`}>
            <InvitationHeader />
            <PresentationComponent persons={family?.persons ?? null} />
            <ConditionContainerLayout condition={!!family?.persons}>
                <PlaceComponent />
            </ConditionContainerLayout>
            {isLoaded ? <LocationComponent /> : null}
            <ConditionContainerLayout condition={!!family?.persons}>
                <TimingInfo />
                <BlueBoxLayout className="mt-5">
                    <Form.Label className={styles.header}>
                        <div className={styles.formDescription}>
                            {UserFormText}
                        </div>
                    </Form.Label>
                </BlueBoxLayout>
                <UserForm methods={methods} />
                <Container
                    fluid
                    className="d-flex flex-wrap align-items-center justify-content-around"
                >
                    <SubmitButton
                        className="blue"
                        title="Сохранить данные"
                        text="Мы придем"
                        handlerSubmit={() => handlerSucces("success")}
                    />

                    <SubmitButton
                        className="grey"
                        title="Сохранить данные"
                        text="Не сможем придти"
                        handlerSubmit={() => handlerSucces("danger")}
                        variant="dark"
                    />
                    <ModalComponent
                        show={show}
                        text={text}
                        color={color}
                        handlerClose={() => {
                            setText("");
                            setShow(false);
                        }}
                        handlerSubmit={handleSubmit(onSubmit)}
                    />
                </Container>
            </ConditionContainerLayout>
            <InvitationFooter />
        </Container>
    );
};
