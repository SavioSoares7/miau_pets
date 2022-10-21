import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.COLORS.BG_COLOR};
    color: ${({ theme }) => theme.COLORS.FT_GRAY};

    font-family: 'Quicksand', sans-serif;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-weight: bold;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }
`;
