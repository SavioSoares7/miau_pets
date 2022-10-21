import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100px;

  background-color: ${({ theme }) => theme.COLORS.BG_DARK};

  > a {
    > img {
      width: 120px;
    }
  }
`;
export const Menu = styled.nav`
  > ul {
    display: flex;
    > li {
      margin-right: 20px;
      > a {
        color: ${({ theme }) => theme.COLORS.FT_WHITE};
      }
    }
  }
`;
