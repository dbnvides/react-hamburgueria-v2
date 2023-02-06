import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { IContextProviderProps } from "../types";
import { IProviderProduct, IProdResponse } from "./types";

export const ProductContext = createContext({} as IProviderProduct);

export const ProductProvider = ({ children }: IContextProviderProps) => {
  const [products, setProducts] = useState<IProdResponse[] | []>([]);
  const [currentSale, setCurrentSale] = useState<IProdResponse[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProdResponse[] | []>([]);
  const [nameSearch, setNameSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const validationCurrent = (id: number) => {
    if (currentSale.length > 0) {
      let prodId = currentSale.map((item) => item.id);
      let prodValidation = prodId.includes(id);
      if (prodValidation) {
        return true;
      }
      return false;
    }
    return false;
  };

  const addProduct = (id: number) => {
    let prod = products.filter((item) => item.id === id && item);
    let validate = validationCurrent(id);
    if (!validate) {
      setCurrentSale([...currentSale, ...prod]);
      totalPrice();
    } else {
      toast.error("Produto ja adicionado");
    }
  };

  const totalPrice = () => {
    if (currentSale.length > 0) {
      let filterPrice = currentSale.map((item) => item.price);
      let totalValue = filterPrice.reduce((el, elv) => (el += elv));
      return totalValue;
    }
  };

  const totalCash = totalPrice();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        addProduct,
        setLoading,
        setProducts,
        modalIsOpen,
        setIsOpen,
        currentSale,
        setCurrentSale,
        closeModal,
        totalCash,
        filteredProducts,
        setFilteredProducts,
        nameSearch,
        setNameSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
