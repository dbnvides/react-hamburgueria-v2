import React from "react";
import { StyledContainer } from "./styled";

interface IContainerProp {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProp) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
