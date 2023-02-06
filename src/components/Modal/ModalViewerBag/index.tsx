import { useContext } from "react";
import { Modal } from "..";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import Container from "../../Container";
import { CardBag } from "../Card";
import { StyledBoxEmpty, StyledMain } from "./styled";

const ModalViewer = () => {
  const { currentSale, setCurrentSale, totalCash } = useContext(ProductContext);

  const emptyList = () => {
    setCurrentSale([]);
  };

  return (
    <Modal>
      <StyledMain>
        <div className="title-box">
          <h2>Sacola de compras</h2>
        </div>
        {currentSale.length === 0 ? (
          <StyledBoxEmpty>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </StyledBoxEmpty>
        ) : (
          <Container>
            <ul>
              {currentSale.map((prod) => (
                <CardBag name={prod.name} img={prod.img} id={prod.id} obj={prod} key={prod.id} />
              ))}
            </ul>
            <div className="allValue">
              <p>Total</p>
              <span>
                {totalCash &&
                  totalCash.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </span>
            </div>
            <button className="btnRemoveAll" onClick={() => emptyList()}>
              Remover todos
            </button>
          </Container>
        )}
      </StyledMain>
    </Modal>
  );
};

export default ModalViewer;
