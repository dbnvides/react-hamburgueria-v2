import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Fieldset } from "./styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, id, label, register }: IInputProps) => {
  return (
    <Fieldset>
      <input type={type} id={id} {...register} required />
      <span>{label}</span>
    </Fieldset>
  );
};

export default Input;
