import { forwardRef } from "react";

export const Input = forwardRef(function (props, ref) {
  return <input {...props} ref={ref} />;
});

export default Input;
