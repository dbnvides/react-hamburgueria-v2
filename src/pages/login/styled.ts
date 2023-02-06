import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;

  .img-desktop {
    display: none;
  }

  .main-description {
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      font-size: 40px;
      margin: 50px 0 10px;
    }

    span {
      font-size: 25px;
      color: var(--secundary);
    }
  }

  @media (min-width: 940px) {
    flex-direction: row;

    .main-description {
      width: 50%;
      position: relative;
      top: -50px;
    }

    .img-desktop {
      display: block;
      width: 200px;
      margin-top: 20px;
    }
  }
`;
