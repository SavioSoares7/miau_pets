import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;

  > svg {
    position: fixed;
    bottom: 0;
    z-index: -999;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 50px;

  > form {
    border-radius: 16px;
    padding: 20px;
    height: 400px;
    width: 390px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      margin-bottom: 30px;
      text-align: center;
    }

    > label {
      text-align: center;
      display: block;
      margin: 10px 0 20px;
      width: 360px;

      font-weight: bold;
      > input {
        margin: 30px 0 10px;
        font-size: 14px;
      }
    }
    > button {
      margin-top: 20px;

      padding: 20px;
      width: 80%;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.COLORS.BG_DARK};
      color: ${({ theme }) => theme.COLORS.FT_WHITE};
      opacity: 0.9;

      border: none;

      &:hover {
        transition: 500ms;
        opacity: 1;
      }
    }
  }

  flex: 1;
  width: 100%;

  height: calc(100vh - 140px);
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  width: 100%;
  height: calc(100vh - 140px);

  > img {
    height: 80%;
  }

  @media (max-width: 768px) {
    display: none;
    > img {
      display: none;
    }
  }
`;
