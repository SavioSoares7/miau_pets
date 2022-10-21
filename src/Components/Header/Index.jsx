import { Menu } from "./Style";

import Logo from "../../assets/img/logo-editor.svg";
import { Link } from "react-router-dom";

export function Header({ children }) {
  return (
    <Menu>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {children}
    </Menu>
  );
}
