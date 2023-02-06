import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledForm } from "../../../components/Form/styled";

export const StyledFormLogin = styled(StyledForm)`
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

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;

  background: var(--grey-0);
  color: var(--grey-30);

  border-radius: 5px;

  font-size: var(--headline);
  font-weight: var(--semibold);
`;
