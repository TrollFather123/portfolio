import CustomInput from "@/ui/Inputs/CustomInput";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import React from "react";
import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/login.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import regex from "@/lib/regex";
import message from "@/json/message/message";
import { useAppDispatch } from "@/reduxtoolkit/hooks/hooks";
import { setLoginData } from "@/reduxtoolkit/slices/logInSlice";
import CustomButton from "@/ui/Buttons/CustomButton";
import useNotiStack from "@/hooks/useNotistack";

type IFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm<IFormInput>();
  const { toastSuccess } = useNotiStack();
  const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(setLoginData(data));
    toastSuccess("Login success");
    reset();
  };


  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Paper className={styles.loginBox}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              {...register("email", {
                required: message.error.enter_email,
                pattern: {
                  value: regex.emailRegex,
                  message: message.error.email_format
                }
              })}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Enter email*"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter username"
                  error={Boolean(errors?.email)}
                  helperText={errors?.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              {...register("password", {
                required: message.error.enter_password
              })}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Enter password*"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter password"
                  error={Boolean(errors?.password)}
                  helperText={errors?.password?.message}
                />
              )}
            />

            <CustomButton type="submit" disabled={false}>
              <span>Submit</span>
            </CustomButton>
          </form>
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default Login;
