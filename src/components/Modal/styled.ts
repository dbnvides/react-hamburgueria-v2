import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: var(--white);
  width: 95%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 8px;
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    top: -100px;
  }

  .btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    color: var(--grey-0);
    cursor: pointer;
    font-size: 30px;

    &:hover {
      color: var(--grey-40);
    }
  }
`;

export const StyledBackModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background: rgba(51, 51, 51, 0.5);
`;
