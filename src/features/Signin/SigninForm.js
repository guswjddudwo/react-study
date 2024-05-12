import styled from "styled-components";

export default function SigninForm({ children }) {
  return <Form>{children}</Form>;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
