import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório").min(3, "minimo 3 caracteres"),
  email: yup.string().required("Email obrigatório").email("Email invalido!"),
  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
    .min(8, "É necessário uma senha de pelos 8 caracteres"),
  validatePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha não compatível")
    .required("Confirmação de senha obrigatória"),
});
