import { StyledCartCard } from "./styled";
import { IProdResponse } from "../../../contexts/ProductContext/types";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { FaTrash } from "react-icons/fa";

interface ICardBagProps {
  name: string;
  img: string;
  id: number;
  obj: any;
}

export const CardBag = ({ name, img, id, obj }: ICardBagProps) => {
  const { setCurrentSale, currentSale } = useContext(ProductContext);

  const removeItem = (item: IProdResponse) => {
    let newArr = currentSale.filter((element) => element !== item);
    setCurrentSale(newArr);
  };

  return (
    <StyledCartCard key={id}>
      <div className="box-img">
        <img src={img} alt={name} />
      </div>
      <div className="boxContent">
        <h3>{name}</h3>
      </div>
      <button onClick={() => removeItem(obj)}>
        <FaTrash />
      </button>
    </StyledCartCard>
  );
};
