import React from "react";

const Anchor = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return <a ref={ref} className={className} {...props}></a>;
});

export default Anchor;
