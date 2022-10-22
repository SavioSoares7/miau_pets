import { Container, Box } from "./style";

import { InputForm } from "../../Components/InputForm";
import { Button } from "../../Components/Button";

export function Adoption() {
  const checkCat = document.querySelector("input#cat");
  const checkDog = document.querySelector("input#dog");

  function checkAnimal() {
    if (checkCat.checked) {
      alert("Checked");
    } else if (checkDog.checked) {
      alert("Checked");
    }
  }

  return (
    <Container>
      <Box>
        <div>
          <label>
            <span>Gatos</span>
            <input type="radio" name="animal" id="cat" />
          </label>

          <label>
            <span>Cachorro</span>
            <input type="radio" name="animal" id="dog" />
          </label>
        </div>

        <div>
          <InputForm placeholder="Digite animal que quer adotar" />
          <button>Pesquisar</button>
        </div>
      </Box>
    </Container>
  );
}
