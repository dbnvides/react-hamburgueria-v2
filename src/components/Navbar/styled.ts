import styled from "styled-components";

export const StyledSection = styled.section`
  min-width: 100%;
  background-color: var(--grey-0);
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));

  header {
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;

    h2 {
      font-size: var(--title2);
    }

    form {
      display: flex;
      max-width: 365px;
      width: 100%;
      position: relative;

      input {
        width: 90%;
        padding: 15px 10px;
        background: var(--white);
        border: 2px solid var(--grey-20);
        border-radius: 8px;
        justify-self: center;
        font-size: var(--body);

        @media (min-width: 768px) {
          font-size: var(--title3);
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 40px;
        top: 7px;

        color: var(--grey-0);
        background-color: var(--primary);

        width: 50px;
        height: 40px;
        font-size: 20px;

        border-radius: 8px;
        cursor: pointer;
      }
    }

    .title-logo {
      font-size: var(--title4);
      color: var(--secundary);
    }

    button {
      width: 25px;
      height: 25px;
      background: transparent;
      font-size: 25px;
      color: var(--grey-50);
      cursor: pointer;
      border: none;

      @media (min-width: 768px) {
        bottom: 6px;
      }
    }

    .search-on-desktop {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        input {
          width: 300px;
        }

        button {
          right: 10px;
        }
      }
    }
  }
`;

export const StyledSearch = styled.header`
  display: flex;
  justify-content: center;

  .close-modal-search {
    color: var(--grey-40);
    font-size: 30px;
    position: absolute;
    right: 0;
    top: 10px;
  }
`;

export const StyledNoSearch = styled.header`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 20px;

    li {
      display: flex;
      position: relative;
      align-items: center;

      span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -5px;
        right: -5px;

        background-color: var(--primary);
        color: var(--grey-0);

        font-size: 14px;
        height: 20px;
        font-weight: 900;
        border-radius: 8px;
        width: 15px;

        @media (min-width: 768px) {
          top: 10px;
        }
      }
    }
    .btn-serch-mobile {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
`;
