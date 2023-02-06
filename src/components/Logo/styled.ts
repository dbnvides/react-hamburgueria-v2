import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 377px;
  height: 90px;
  padding: 10px;
  gap: 15px;

  border: 1px solid var(--grey-20);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  div {
    display: flex;
    min-width: 60px;
    height: 60px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: rgba(39, 174, 96, 0.1);
  }

  p {
    font-size: var(--title4);
    font-weight: var(--regular);
    line-height: 22px;
    color: var(--grey-50);
  }
`;
