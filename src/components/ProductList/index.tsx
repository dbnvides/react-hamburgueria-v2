import { IProdResponse } from "../../contexts/ProductContext/types";
import Container from "../Container";
import Card from "./Card";
import { StyledProduct } from "./styled";

interface IProdProps {
  list: IProdResponse[];
  handleClick: (id: number) => void;
}

export const ProductList = ({ list, handleClick }: IProdProps) => {
  return (
    <Container>
      <StyledProduct>
        {list.map(
          ({ name, category, price, img, id }) =>
            name && (
              <Card
                handleClick={handleClick}
                key={id}
                id={id}
                name={name}
                category={category}
                price={price}
                img={img}
              />
            )
        )}
      </StyledProduct>
    </Container>
  );
};
