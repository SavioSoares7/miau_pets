import {
  Container,
  ContainerInfo,
  SectionProduct,
  ContainerProduct,
  Product,
} from "./style";
import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

import { API } from "../../API/api";

import { AiOutlineArrowDown } from "react-icons/ai";
import { HeaderMain } from "../../Components/HeaderMain";

import cat from "../../assets/img/catinbox.png";

export function Home() {
  const api = API;

  return (
    <>
      <HeaderMain />

      <Container>
        <ContainerInfo>
          <img src={cat} alt="" />

          <div>
            <h1>Quem somos ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              totam quia, odit ipsam minima neque dolores beatae corrupti
              sapiente natus voluptas repellendus libero molestiae deserunt!
              Nemo voluptatibus assumenda facere sint? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corporis totam quia, odit ipsam
              minima neque dolores beatae corrupti sapiente natus voluptas
              repellendus libero molestiae deserunt! Nemo voluptatibus assumenda
              facere sint?
            </p>
            <Button>Conhecer</Button>
          </div>

          <AiOutlineArrowDown size={50} />
        </ContainerInfo>

        <SectionProduct>
          <h1>Produtos</h1>

          <ContainerProduct>
            <Link to="/produtos">
              <span>Acessar produtos</span>
              {api.map((item, index) => {
                if (index > 2) {
                  return;
                } else {
                  return (
                    <Product>
                      <h2>{item.name}</h2>
                      <span>{item.price}</span>
                      <img src={item.product} alt={item.name} />
                    </Product>
                  );
                }
              })}
            </Link>
          </ContainerProduct>
        </SectionProduct>
      </Container>
    </>
  );
}
