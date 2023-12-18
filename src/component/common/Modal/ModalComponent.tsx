import { FC } from "react";
import { Modal, Button } from "react-bootstrap";

interface IProps {
    show: boolean;
    text: string;
    color: "success" | "danger";
    handlerClose: () => void;
    handlerSubmit: () => Promise<void>;
}

export const ModalComponent: FC<IProps> = ({
    show,
    text,
    color,
    handlerClose,
    handlerSubmit,
}) => {
    return (
        <Modal show={show} onHide={handlerClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <p>{text}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handlerClose}>
                    Отмена
                </Button>
                <Button variant={color} onClick={handlerSubmit}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
