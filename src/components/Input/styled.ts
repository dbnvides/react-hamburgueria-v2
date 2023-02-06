import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: transparent;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 15px;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
  }

  span {
    position: absolute;
    left: 10px;
    top: 15px;
    pointer-events: none;
    transition: 0.5s;
    opacity: 0.5;
  }

  input:focus ~ span,
  input:valid ~ span {
    transform: translateY(-20px) translateX(5px);
    opacity: 1;
    letter-spacing: 0.1rem;
    font-size: var(--caption);
    padding: 0 5px;
    border-left: 2px solid var(--grey-100);
    border-right: 2px solid var(--grey-100);
    background: var(--white);
  }
`;
