import React from "react";
import { StyledForm } from "./styled";

interface IFormProp {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler;
}

export const FormGlobal = ({ children, onSubmit }: IFormProp) => {
  return (
    <StyledForm noValidate onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
