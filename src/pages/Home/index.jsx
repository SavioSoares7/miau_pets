import {
  Container,
  ContainerInfo,
  SectionProduct,
  ContainerProduct,
  Product,
  SectionAdoption,
  ContainerAdoption,
  AdoptionBox,
} from "./style";
import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

import { API } from "../../API/api";

import { AiOutlineArrowDown } from "react-icons/ai";
import { HeaderMain } from "../../Components/HeaderMain";

import catBox from "../../assets/img/catstanding.png";
import cat from "../../assets/img/gatoReal.png";
import dogReal from "../../assets/img/cachorroReal.png";
import dog from "../../assets/img/dog.png";

export function Home() {
  const api = API;

  return (
    <>
      <HeaderMain />

      <Container>
        <ContainerInfo>
          <img src={catBox} alt="" />

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
                      <img src={item.product} alt={item.name} />

                      <span>{item.price}</span>
                    </Product>
                  );
                }
              })}
            </Link>
          </ContainerProduct>
        </SectionProduct>

        <SectionAdoption>
          <img src={dog} alt="" />

          <div>
            <h1>Quer adotar um gato ou cachorro ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam atque excepturi voluptate nisi ipsam iste, amet,
              incidunt id nihil perferendis deserunt sequi, provident hic odit
              repellat corrupti fugiat voluptatem.
            </p>

            <ContainerAdoption>
              <AdoptionBox>
                <Link>
                  <img src={cat} alt="" />
                  <span>Gato</span>
                </Link>
              </AdoptionBox>
              <AdoptionBox>
                <Link>
                  <img src={dogReal} alt="" />
                  <span>Cachorro</span>
                </Link>
              </AdoptionBox>
            </ContainerAdoption>
          </div>
        </SectionAdoption>
      </Container>
    </>
  );
}
