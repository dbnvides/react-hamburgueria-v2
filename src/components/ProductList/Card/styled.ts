import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 250px;
  max-width: 300px;
  height: 330px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--grey-20);
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.9);
    transition: 0.3s;
    border: 2px solid var(--primary);
    .btn-add-prod {
      background-color: var(--primary);
      border: 2px solid var(--primary);
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .btn-add-prod {
    background-color: var(--grey-30);
    border: 2px solid var(--grey-30);
    font-weight: 500;
  }

  @media (min-width: 768px) {
    height: 340px;
  }
`;

export const BoxImgCard = styled.div`
  width: 100%;
  max-height: 150px;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-0);
  border-radius: 5px 5px 0 0;

  img {
    object-fit: contain;
    object-position: center;
    max-height: 100%;
  }
`;

export const BoxContentCard = styled.div`
  gap: 16px;
  padding: 20px;

  h2 {
    font-size: var(--title4);
    font-weight: var(--bold);
  }

  p {
    color: var(--grey-50);
    font-size: var(--caption);
  }

  span {
    color: var(--primary);
    font-size: var(--title4);
    font-weight: var(--semibold);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--title3);
    }

    p {
      color: var(--grey-50);
    }

    span {
      color: var(--primary);
      font-size: var(--title4);
      font-weight: var(--semibold);
    }
  }
`;
