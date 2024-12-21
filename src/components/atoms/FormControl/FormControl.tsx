import React from "react";

const FormControl = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  React.HTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > & {
    tag: "input" | "select" | "textarea";
  }
>(({ tag, className, ...props }, ref) => {
  const Tag = tag || "input";
  return <Tag ref={ref as never} className={className} {...props}></Tag>;
});

export default FormControl;
