import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button ref={ref} className={className} {...props}></button>;
});

export default Button;
