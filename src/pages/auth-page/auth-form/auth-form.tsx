import { Button, TextField, Typography } from "@mui/material";
import {
  Controller,
  useForm,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import cls from "./auth-form.module.scss";
import { toast } from "react-toastify";
import { loginValidation, passwordValidation } from "./validation";

interface ISignInForm {
  login: string;
  password: string;
}

const AuthForm = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    toast.success("Success sign in");
    console.log(data);
  };

  return (
    <div className={cls["auth-form"]}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className={cls.subtitle}
      >
        Чтобы получит достуб
      </Typography>

      <form
        className={cls["auth-form__form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          rules={loginValidation}
          name="login"
          render={({ field }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              fullWidth={true}
              className={cls.input}
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              helperText={errors.login?.message}
              error={!!errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              size="small"
              margin="normal"
              fullWidth={true}
              className={cls.input}
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
