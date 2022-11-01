import React from "react";
import cls from "./auth-page.module.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Typography } from "@mui/material";
import AuthForm from "./auth-form";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => (
  <div className={cls["auth-page"]}>
    <Typography
      variant="h4"
      component="div"
      gutterBottom={true}
      className="auth"
    >
      <AuthForm />
    </Typography>
  </div>
);

export default AuthPage;
