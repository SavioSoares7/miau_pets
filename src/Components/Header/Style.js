import styled from "styled-components";

export const Menu = styled.nav`
  @keyframes arrowMove {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 100px;

  width: 100%;
  height: 125px;

  background-color: ${({ theme }) => theme.COLORS.BG_DARK};
  color: ${({ theme }) => theme.COLORS.FT_WHITE};

  > a {
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    display: flex;
    align-items: center;
    gap: 10px;

    &:last-child:hover {
      > svg {
        animation: arrowMove 550ms ease-in-out infinite;
      }
    }

    > img {
      width: 150px;
      height: 150px;
    }
  }
`;
