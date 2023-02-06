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

  .box-title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    h2 {
      font-size: var(--title3);
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
