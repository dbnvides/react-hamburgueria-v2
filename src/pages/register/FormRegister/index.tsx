import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Button } from "../../../components/Button";
import { StyledFormRegister, StyledLinkRegister } from "./styled";
import SpanError from "../../../components/Errors";
import Input from "../../../components/Input";
import { IRegister } from "./types";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

export const FormRegister = () => {
  const { userRegister, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    const newArr = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    userRegister(newArr);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <div className="box-title">
        <h2>Cadastro</h2>
        <StyledLinkRegister to={"/login"}>Retornar para o login</StyledLinkRegister>
      </div>

      <Input type="text" id="name" label="Nome" register={register("name")} required />
      {errors.name && <SpanError>{errors.name.message}</SpanError>}

      <Input type="email" id="email" label="Email" register={register("email")} required />
      {errors.email && <SpanError>{errors.email.message}</SpanError>}

      <Input type="password" id="password" label="Senha" register={register("password")} required />
      {errors.password && <SpanError>{errors.password.message}</SpanError>}

      <Input
        type="password"
        id="validatePassword"
        label="Confirmar Senha"
        register={register("validatePassword")}
        required
      />
      {errors.validatePassword && <SpanError>{errors.validatePassword.message}</SpanError>}

      <Button type="submit">{loading ? "Cadastrando..." : "Cadastrar"}</Button>
    </StyledFormRegister>
  );
};
