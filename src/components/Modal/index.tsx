import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import { IContextProviderProps } from "../../contexts/types";
import { StyledBackModal, StyledModal } from "./styled";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Modal = ({ children }: IContextProviderProps) => {
  const { closeModal } = useContext(ProductContext);
  return (
    <StyledBackModal>
      <StyledModal>
        <button className="btn-close" onClick={closeModal}>
          <IoCloseCircleOutline />
        </button>
        {children}
      </StyledModal>
    </StyledBackModal>
  );
};
