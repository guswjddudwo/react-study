import { useState, useCallback } from "react";
import SigninForm from "./SigninForm";
import TextField from "../../components/TextField";

function SigninContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const updateEmail = useCallback((e) => {
    setEmail(e.target.value);
  });

  const updatePhoneNumber = useCallback((e) => {
    setPhoneNumber(e.taerget.value);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const parameter = {};
  };

  return (
    <SigninForm onSubmit={handleSubmit}>
      <TextField label="이름" name="name" value="neme" onChange={updateName} />
      <TextField label="이메일" name="  email" value="email" />
      <TextField label="핸드폰번호" name="phonenumber" value="phonenumber" />
    </SigninForm>
  );
}

export default SigninContainer;
