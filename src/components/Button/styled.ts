import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 20px;
  width: 100px;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: var(--body);
    width: 122px;
    font-weight: var(--semibold);
  }

  &:hover {
    background-color: var(--sucess);
    border: 2px solid var(--sucess);
  }
`;
