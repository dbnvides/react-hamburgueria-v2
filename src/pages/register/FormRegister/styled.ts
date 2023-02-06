import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledForm } from "../../../components/Form/styled";

export const StyledFormRegister = styled(StyledForm)`
  display: flex;
  width: 100%;
  max-width: 500px;

  button {
    width: 100%;
    height: 60px;

    font-size: var(--headline);
    font-weight: var(--semibold);
  }

  .text-register {
    align-self: center;
    text-align: center;

    width: 250px;

    font-size: var(--title4);
    line-height: 18px;
    font-weight: var(--regular);
    color: var(--grey-30);
  }
`;

export const StyledLinkRegister = styled(Link)`
  font-size: var(--title4);
  text-decoration: underline;
  font-weight: var(--regular);
`;
