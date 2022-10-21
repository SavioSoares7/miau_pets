import { Container, Menu } from "./style";

import { Link } from "react-router-dom";

import logo from "../../assets/img/Logo.png";

import { AiOutlineLogin } from "react-icons/ai";

export function HeaderMain() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loja">Produtos</Link>
          </li>
          <li>
            <Link to="/adocao">Adoção</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </Menu>

      <Link to="/login">
        <AiOutlineLogin fill="#fff" size={25} />
      </Link>
    </Container>
  );
}
