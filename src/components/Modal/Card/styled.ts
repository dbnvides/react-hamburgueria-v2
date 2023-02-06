import styled from "styled-components";

export const StyledCartCard = styled.li`
  width: 100%;
  min-height: 70px;
  display: flex;
  gap: 15px;
  position: relative;
  align-items: flex-start;

  .boxContent {
    display: flex;
    width: 140px;
    max-height: 100%;

    h3 {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      align-self: flex-start;
      font-size: var(--title3);
    }
  }

  .box-img {
    width: 70px;
    height: 70px;
    background-color: var(--grey-20);
    border-radius: 5px;

    img {
      object-position: center;
      object-fit: contain;
      max-width: 100%;
    }
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    width: 15px;
    height: 15px;
    right: 5px;
    top: 5px;
    color: var(--grey-40);
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: var(--grey-50);
    }
  }
`;
