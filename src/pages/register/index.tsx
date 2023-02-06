import Container from "../../components/Container";
import { DescriptionText } from "../../components/Logo";
import { FormRegister } from "./FormRegister";
import { StyledMain } from "./styled";
import DesktopImg from "../../img/group-desktop.png";

export const Register = () => {
  return (
    <Container>
      <StyledMain>
        <div className="main-description">
          <h2>
            Burger <span>Kenzie</span>
          </h2>
          <DescriptionText />
          <img src={DesktopImg} className="img-desktop" alt="circles in screen" />
        </div>
        <FormRegister />
      </StyledMain>
    </Container>
  );
};
