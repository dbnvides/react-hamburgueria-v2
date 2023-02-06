import { useContext, useState } from "react";
import Container from "../Container";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { StyledNoSearch, StyledSearch, StyledSection } from "./styled";
import { HiSearch } from "react-icons/hi";
import { RxExit } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPropFormSearch } from "./type";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  const { userLogout } = useContext(AuthContext);
  const { currentSale, setIsOpen, products, setFilteredProducts, setNameSearch } =
    useContext(ProductContext);
  const [searchOn, setSearchOn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPropFormSearch>({
    mode: "onSubmit",
  });

  const submit: SubmitHandler<IPropFormSearch> = (data) => {
    showProducts(data.name);
  };

  const searchInt = (e: string) => {
    if (e.length === 0) {
      setFilteredProducts([]);
    }
  };

  const showProducts = (data: string) => {
    let nameProd = products.filter((prod) => prod.name === data);
    let nameCategory = products.filter((prod) => prod.category === data);
    if (nameProd.length > 0) {
      setNameSearch(data);
      return setFilteredProducts(nameProd);
    }
    if (nameCategory.length > 0) {
      setNameSearch(data);
      return setFilteredProducts(nameCategory);
    }
    return toast.error("Produto não encontrado");
  };

  return (
    <StyledSection>
      <Container>
        {searchOn ? (
          <StyledSearch>
            <form onSubmit={handleSubmit(submit)}>
              <input
                type="text"
                id="searchName"
                placeholder="Digite seu produto aqui..."
                {...register("name", {
                  onChange: (e) => {
                    searchInt(e.target.value);
                  },
                })}
              />
              <button type={"submit"}>
                <HiSearch />
              </button>
              <span className="close-modal-search" onClick={() => setSearchOn(false)}>
                <IoCloseCircleOutline />
              </span>
            </form>
          </StyledSearch>
        ) : (
          <StyledNoSearch>
            <h2>
              Burguer <span className="title-logo">Kenzie</span>
            </h2>

            <ul>
              <li>
                <button onClick={() => setSearchOn(!searchOn)} className="btn-serch-mobile">
                  <HiSearch />
                </button>
              </li>
              <li className="search-on-desktop">
                <form onSubmit={handleSubmit(submit)}>
                  <input
                    type="text"
                    id="searchName"
                    placeholder="Digite seu produto aqui..."
                    {...register("name", {
                      onChange: (e) => {
                        searchInt(e.target.value);
                      },
                    })}
                  />
                  <button type={"submit"}>
                    <HiSearch />
                  </button>
                </form>
              </li>
              <li>
                <button className="bag-buy" onClick={() => setIsOpen(true)}>
                  <FiShoppingBag />
                  <span>{currentSale.length}</span>
                </button>
              </li>
              <li>
                <button onClick={userLogout}>
                  <RxExit />
                </button>
              </li>
            </ul>
          </StyledNoSearch>
        )}
      </Container>
    </StyledSection>
  );
};
