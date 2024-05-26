import { useState, useCallback } from "react";
import SigninForm from "./SigninForm";
import TextField from "../../components/TextField";

export default function SigninContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateName = useCallback((event) => {
    setName(event.target.value);
  });
  const updateEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const updatePhoneNumber = useCallback((event) => {
    setPhoneNumber(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); //기본 기능을 막음
    console.log("from evet", event);

    // formData의 get 방식을 활용
    const formData = new FormData(event.target);

    //   const parameter = {
    //     name: formData.get("name"),
    //     email: formData.get("email"),
    //     phoneNumber: formData.get("phonenumber"),
    //   };

    // formData의 entries를 활용

    const entries = Object.fromEntries([...formData.entries()]);
    console.log("parameter", parameter);

    const parameter = {};
  };

  return (
    <SigninForm onSubmit={handleSubmit}>
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
      <button type="submit">submit</button>
    </SigninForm>
  );
}
