import { memo } from "react";
import styled from "styled-components";
import Input from "./Input";
import { ForwardedRef, forwardRef } from "react";

/**
 * memo 함수에 컴포넌트를 wrapping하는 순간
 * 컴포넌트는 상위 state가 변경되어 형태를 유지함(변경되지 않음)
 * 다만, 주입 받는 props가 변경이 일어날때는 변경됨
 */
const TextField = forwardRef(function (
  { label, name, value, onChange: handleChange },
  ref
) {
  return (
    <TextFieldWapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
    </TextFieldWapper>
  );
});

const Label = styled.label`
  width: 80px;
`;

const TextFieldWapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export default memo(TextField);
