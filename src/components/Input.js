import { forwardRef } from "react";

export const Input = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} />;
});
export default Input;

//  구조 분해 하는 방법 기억하기
// const props= {a:234, b:'sr', c:'13'}
// const {a,...props} = props
