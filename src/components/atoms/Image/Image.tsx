import React from "react";

const Image = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return <img ref={ref} className={className} {...props} />;
});

export default Image;
