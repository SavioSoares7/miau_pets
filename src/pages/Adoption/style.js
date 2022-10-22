import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  width: 60%;

  background-color: #ccc;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    gap: 20px;
    > label {
      margin-right: 20px;
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  > div:last-child {
    > button {
      padding: 20px;
      border: none;
      border-radius: 10px;
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;
