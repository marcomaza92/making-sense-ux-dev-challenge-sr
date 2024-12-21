import { createPortal } from "react-dom";
import Button from "../../atoms/Button/Button";
import type { ModalProps } from "./Modal.types";

const Modal = (props: ModalProps) => {
  const { onClose } = props;
  return createPortal(
    <div>
      <h1>This is a modal that uses React Portal</h1>
      <Button onClick={onClose}>Close Modal</Button>
    </div>,
    document.body
  );
};

export default Modal;
