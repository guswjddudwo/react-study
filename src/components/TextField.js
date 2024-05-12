import styled from "styled-components";
import Input from "./Input";
import { ForwardedRef, forwardRef } from "react";

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

export default TextField;
