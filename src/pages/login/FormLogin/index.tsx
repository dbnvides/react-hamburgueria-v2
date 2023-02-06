import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { Button } from "../../../components/Button";
import { StyledFormLogin, StyledLink } from "./styled";
import SpanError from "../../../components/Errors";
import Input from "../../../components/Input";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { IUser } from "../../../contexts/AuthContext/types";

export const FormLogin = () => {
  const { userLogin, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    userLogin(data);
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

      <Input type="email" id="email" label="Email" register={register("email")} required />
      {errors.email && <SpanError>{errors.email.message}</SpanError>}

      <Input type="password" id="password" label="Senha" register={register("password")} required />
      {errors.password && <SpanError>{errors.password.message}</SpanError>}

      <Button type="submit">{loading ? "Logando..." : "Logar"}</Button>
      <p className="text-register">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <StyledLink to="/register">Cadastrar</StyledLink>
    </StyledFormLogin>
  );
};
