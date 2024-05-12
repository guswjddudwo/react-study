import { useState } from "react";
import SigninForm from "./SigninForm";
import TextField from "../../components/TextField";

export default function SigninContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <SigninForm>
      <TextField label="이름" name="name" value={name} onChange={updateName} />
      <TextField
        label="이메일"
        name="email"
        value={email}
        onChange={updateEmail}
      />
      <TextField
        label="휴대폰번호"
        name="phonenumber"
        value={phoneNumber}
        onChange={updatePhoneNumber}
      />
    </SigninForm>
  );
}
