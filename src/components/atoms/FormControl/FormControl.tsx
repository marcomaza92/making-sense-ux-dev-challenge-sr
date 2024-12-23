import React from "react";
import type { FormControlProps } from "./FormControl.types";
import styles from "./FormControl.module.css";
import clsx from "clsx";
const FormControl = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormControlProps &
    (
      | React.InputHTMLAttributes<HTMLInputElement>
      | React.TextareaHTMLAttributes<HTMLTextAreaElement>
      | React.SelectHTMLAttributes<HTMLSelectElement>
    )
>(({ tag = "input", type = "", className, ...props }, ref) => {
  const Tag = tag;
  return (
    /* @ts-expect-error: The type of 'tag' may not match the expected HTML element type, which could lead to type errors. This is a workaround, not a permanent solution */
    <Tag
      ref={ref as never}
      className={clsx(className, styles.formControl, styles[tag], styles[type])}
      {...props}
    />
  );
});

export default FormControl;
