import styled from "styled-components";
export const Container = styled.div``;

export const ContainerInfo = styled.section`
  @keyframes arrowMove {
    0% {
      opacity: 0.1;
      bottom: 40px;
    }
    100% {
      opacity: 1;
      bottom: 10px;
    }
  }

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;

  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
  height: calc(100vh - 100px);

  > svg {
    position: absolute;
    bottom: 20px;

    animation: arrowMove 1s infinite;
  }
  > img {
    flex: 1;
    width: 350px;
  }
  > div {
    text-align: center;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    > h1 {
      font-size: 34px;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    > p {
      text-align: justify;
      margin-bottom: 20px;
    }
  }
`;
export const SectionProduct = styled.section`
  text-align: center;
  > h1 {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    padding: 40px;
    font-size: 34px;
  }
`;

export const ContainerProduct = styled.div`
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;

    position: relative;

    &:hover > span {
      transition: 200ms all;
      transform: scale(1.1);
    }

    > span {
      position: absolute;
      right: 45px;

      background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
      border-radius: 20px;
      padding: 30px;

      clip-path: polygon(
        0% 20%,
        60% 20%,
        60% 0%,
        100% 50%,
        60% 100%,
        60% 80%,
        0% 80%
      );
    }
  }
`;

export const Product = styled.div`
  width: 400px;
  height: 400px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    padding: 20px;
  }
  > img {
    width: 300px;
    height: 300px;
  }
`;
