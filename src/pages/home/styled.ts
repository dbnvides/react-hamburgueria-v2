import styled from "styled-components";
import { Button } from "../../components/Button";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  .sec-prod {
    margin-top: 20px;
    position: relative;
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  left: 10px;
  padding: 10px;
  width: max-content;
`;
