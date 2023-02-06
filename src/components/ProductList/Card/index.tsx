import { Button } from "../../Button";
import { BoxContentCard, BoxImgCard, StyledCard } from "./styled";

export interface ICardProdps {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
  handleClick: (id: number) => void;
}

const Card = ({ name, category, price, img, id, handleClick }: ICardProdps) => {
  return (
    <StyledCard key={id}>
      <BoxImgCard>
        <img src={img} alt={name} />
      </BoxImgCard>
      <BoxContentCard>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Button className={"btn-add-prod"} type={"button"} onClick={() => handleClick(id)}>
          Adicionar
        </Button>
      </BoxContentCard>
    </StyledCard>
  );
};

export default Card;
