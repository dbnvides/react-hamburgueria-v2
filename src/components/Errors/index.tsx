import React from "react";
import { StyledError } from "./styled";

interface IErroProp {
  children: React.ReactNode;
}

const SpanError = ({ children }: IErroProp) => {
  return <StyledError>{children}</StyledError>;
};

export default SpanError;
