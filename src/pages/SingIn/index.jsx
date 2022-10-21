import { Header } from "../../Components/Header/Index";
import { InputForm } from "../../Components/InputForm";

import imgContainer from "../../../src/assets/img/Cat&Dog.png";

import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Container, ContainerForm, ContainerImg } from "./style";

export function SingIn() {
  return (
    <>
      <Header>
        <Link to="/register">
          <span>Registrar</span>
          <AiOutlineArrowRight />
        </Link>
      </Header>

      <Container>
        <ContainerForm>
          <form action="#" method="POST">
            <h2>Entrar</h2>

            <label>
              <span>Email:</span>
              <InputForm placeholder="Digite seu email..." type="email" />
            </label>

            <label>
              <span>Senha:</span>
              <InputForm placeholder="Digite sua senha..." type="password" />
            </label>

            <button>Entrar</button>
          </form>
        </ContainerForm>
        <ContainerImg>
          <img src={imgContainer} alt="Cachorro e Gato" />
        </ContainerImg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#029149"
            fillOpacity="1"
            d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,192C672,203,768,149,864,117.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </>
  );
}
