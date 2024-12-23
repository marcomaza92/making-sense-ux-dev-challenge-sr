import { createPortal } from "react-dom";
import Button from "../../atoms/Button/Button";
import type { ModalProps } from "./Modal.types";
import styles from "./Modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback, useState, useEffect, useRef } from "react";

const Modal = (props: ModalProps) => {
  const { onClose, children, type } = props;
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }

    const handleTabKey = (event: KeyboardEvent) => {
      const focusableElements = contentRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            (lastElement as HTMLElement)?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            (lastElement as HTMLElement)?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, []);

  return createPortal(
    <section className={styles.modal} tabIndex={0}>
      <div
        className={clsx(styles.overlay, {
          [styles.fadeOut]: isClosing,
        })}
      >
        <div
          className={clsx(styles.content, styles[type ?? ""], {
            [styles.slideOut]: isClosing,
          })}
          ref={contentRef}
          tabIndex={-1}
        >
          <div className={styles.closeButton}>
            <Button
              type="close"
              onClick={handleClose}
              ref={firstFocusableElementRef}
            >
              <XMarkIcon className={styles.closeIcon} />
            </Button>
          </div>
          {children}
          {/* @ts-expect-error TS2769: Caution: This element is used for managing focus within the modal. */}
          <div ref={lastFocusableElementRef} tabIndex={0} />
        </div>
      </div>
    </section>,
    document.body
  );
};

export default Modal;
