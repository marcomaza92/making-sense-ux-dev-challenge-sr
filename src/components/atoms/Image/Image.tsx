import clsx from "clsx";
import React from "react";
import styles from "./Image.module.css";
import { ImageProps } from "./Image.types";

const Image = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & ImageProps
>(({ size, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={clsx(styles.image, styles[size ?? "medium"])}
      {...props}
    />
  );
});

export default Image;
