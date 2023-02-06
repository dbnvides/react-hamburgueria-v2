import React from "react";
import { Main } from "./styled";
import shopBag from "../../img/shopBag.png";

export const DescriptionText = () => {
  return (
    <Main>
      <div>
        <img src={shopBag} alt="shopping-bag" />
      </div>
      <p>
        A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.
      </p>
    </Main>
  );
};
