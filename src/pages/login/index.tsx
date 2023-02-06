import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Container from "../../components/Container";
import { DescriptionText } from "../../components/Logo";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { FormLogin } from "./FormLogin";
import { StyledMain } from "./styled";
import DesktopImg from "../../img/group-desktop.png";

export const Login = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return !user ? (
    <Container>
      <StyledMain>
        <div className="main-description">
          <h2>
            Burger <span>Kenzie</span>
          </h2>
          <DescriptionText />
          <img src={DesktopImg} className="img-desktop" alt="circles in screen" />
        </div>
        <FormLogin />
      </StyledMain>
    </Container>
  ) : (
    <Navigate to={"/home"} />
  );
};
