import React from "react";
import styles from "./Text.module.css";
import clsx from "clsx";
import { TextProps } from "./Text.types";

const Text = React.forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  React.HTMLAttributes<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > &
    TextProps
>(({ weight = "normal", type, tag = "span", className, ...props }, ref) => {
  const Tag = tag;
  return (
    <Tag
      ref={ref as never}
      className={clsx(className, styles.text, styles[type], styles[weight])}
      {...props}
    ></Tag>
  );
});

export default Text;
