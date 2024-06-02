import { useForm } from "react-hook-form"; // 자주씀
import TextField from "../../components/TextField";
import { useEffect } from "react";
import styled from "styled-components";

export default function ProductRegisterContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);
  //어디가 에러인지 알 수 있음

  // tigger를 통해 처음부터 validation 체크를 할 수 있음
  // useEffect(() => {
  //   trigger();
  // }, []);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <input
            // defaultValue="sad"
            placeholder="firstName"
            {...register("firstName", {
              required: true,
              minLength: 2,
              maxLength: 5,
            })}
          />
          {errors.firstName && (
            <ErrorText>firstName error:{errors.firstName.type}</ErrorText>
          )}
        </StyledInputWrapper>

        <StyledInputWrapper>
          <input
            placeholder="lastName"
            {...register("lastName", { required: true, pattern: /[A-Za-z]/g })}
          />
          {errors.lastName && (
            <ErrorText>lastName error:{errors.lastName.type}</ErrorText>
          )}
        </StyledInputWrapper>

        <StyledInputWrapper>
          <input
            type="number"
            placeholder="age"
            {...register("age", { required: true, min: 10, max: 20 })}
          />
          {errors.age && <ErrorText>age error:{errors.age.type}</ErrorText>}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <input
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorText>email error</ErrorText>}
        </StyledInputWrapper>

        <StyledInputWrapper>
          <input placeholder="phoneNumber" {...register("phoneNumber")} />
        </StyledInputWrapper>
        <input type="submit" value="submit" />
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

const ErrorText = styled.span`
  color: red;
`;

// Apply validation까지 해보기
