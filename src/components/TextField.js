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
  { label, name, value, onChange: handleChange, errors, ...props },
  ref
) {
  return (
    <div>
      <TextFieldWrapper>
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
      </TextFieldWrapper>
      {errors?.[name] && <ErrorText>{errors[name].message}</ErrorText>}
    </div>
  );
});

const Label = styled.label`
  min-width: 80px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const ErrorText = styled.span`
  color: red;
`;

export default memo(TextField);
