import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import clsx from "clsx";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & ButtonProps
>(({ type, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(styles.button, styles[type ?? ""])}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
