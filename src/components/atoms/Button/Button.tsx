import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import clsx from "clsx";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & ButtonProps
>(({ type = "", variant = "", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(className, styles.button, styles[type], styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
