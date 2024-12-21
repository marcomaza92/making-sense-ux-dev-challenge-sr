import React from "react";

const Text = React.forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  React.HTMLAttributes<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > & {
    tag:
      | "p"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "span"
      | "strong"
      | "em";
  }
>(({ tag, className, ...props }, ref) => {
  const Tag = tag || "span";
  return <Tag ref={ref as never} className={className} {...props}></Tag>;
});

export default Text;
