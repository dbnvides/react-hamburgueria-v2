import styled from "styled-components";

export const StyledMain = styled.main`
  .title-box {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px 15px;
    background-color: var(--primary);
    color: var(--grey-0);
    font-size: var(--title4);
    border-radius: 8px 8px 0 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    max-height: 260px;
    overflow: auto;
    gap: 15px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--grey-20);

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: var(--primary);
      border-radius: 5px;
    }
  }

  .allValue {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    span {
      font-weight: var(--bold);
    }

    p {
      font-weight: var(--bold);
    }
  }
  .btnRemoveAll {
    width: 100%;
    max-width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid var(--grey-20);
    color: var(--grey-50);
    font-weight: var(--bold);
    transition: 0.2s;
    margin-bottom: 20px;
  }
  .btnRemoveAll:hover {
    background-color: var(--secundary);
    color: var(--white);
    cursor: pointer;
  }
`;

export const StyledBoxEmpty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--grey-0);

  h3 {
    font-size: var(--title3);
    font-weight: var(--bold);
  }

  p {
    font-size: var(--body);
    color: var(--grey-50);
    font-weight: var(--regular);
  }
`;
