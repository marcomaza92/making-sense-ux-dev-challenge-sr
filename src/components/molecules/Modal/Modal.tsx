import { createPortal } from "react-dom";
import Button from "../../atoms/Button/Button";
import type { ModalProps } from "./Modal.types";
import styles from "./Modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback, useState } from "react";

const Modal = (props: ModalProps) => {
  const { onClose, children, type } = props;
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);
  return createPortal(
    <section className={styles.modal}>
      <div
        className={clsx(styles.overlay, {
          [styles.fadeOut]: isClosing,
        })}
      >
        <div
          className={clsx(styles.content, styles[type ?? ""], {
            [styles.slideOut]: isClosing,
          })}
        >
          <div className={styles.closeButton}>
            <Button type="close" onClick={handleClose}>
              <XMarkIcon className={styles.closeIcon} />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </section>,
    document.body
  );
};

export default Modal;
