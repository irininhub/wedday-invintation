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
import { Container, Form, Alert } from "react-bootstrap";
import { EStatusInvation, InputsType, formType } from "../../../types";
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
import divider from "../../../assets/divider.webp";

const { REACT_APP_GOOGLE_API_KEY } = process.env;

export const InvationModule: FC = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [visibleAlert, setVisibleAlert] = useState(false);
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
            persons: family?.persons,
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
        updateFamily(fields.docId, {
            persons: fields.persons,
            status,
            form: fields.form,
        });
        setIsSuccess(true);
        setColor("success");
    };

    useEffect(() => {
        !!location.pathname.slice(1) && getFamily(location.pathname.slice(1));
    }, []);
    useEffect(() => {
        if (!!family?.persons) {
            const fields = family.persons?.map(
                (el) => el as { id: string; name: string },
            );
            methods.setValue("form", family.form as formType);
            methods.setValue("persons", fields);
            methods.setValue("docId", family.docId as string);
            if (
                family.status === EStatusInvation.CREATE ||
                family.status === EStatusInvation.SENDED
            ) {
                updateFamily(family.docId as string, {
                    status: EStatusInvation.VIEWED,
                });
            }
        }
    }, [family]);

    const handlerSucces = (type: "success" | "danger") => {
        const text = type === "success" ? SuccesFromText : DangerFromText;
        setColor(type);
        setText(text);
        setShow(true);
    };

    const handleVisible = () => {
        setVisibleAlert(true);
        setTimeout(() => {
            setVisibleAlert(false);
            setIsSuccess(false);
        }, 4000);
    };

    useEffect(() => {
        isSuccess && handleVisible();
    }, [isSuccess]);

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
                <div className={styles.questionnaire}>
                    <h1 className={styles.subHeader}>Анкета для гостей</h1>
                    <img alt="divider" className="my-2" src={divider} />

                    <UserForm methods={methods} />
                    <Container fluid className={styles.actionsContainer}>
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
                        <Alert
                            show={visibleAlert}
                            variant="success"
                            className={styles.alert}
                        >
                            Данные успешно сохранены. Будем рады Вас видеть!
                        </Alert>
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
                </div>
            </ConditionContainerLayout>
            <InvitationFooter />
        </Container>
    );
};
