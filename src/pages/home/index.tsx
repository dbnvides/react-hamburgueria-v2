import { useContext, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import ModalViewer from "../../components/Modal/ModalViewerBag";
import { ProductList } from "../../components/ProductList";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import { api } from "../../services/api";
import { Main, StyledButton } from "./styled";
import Container from "../../components/Container";

export const Home = () => {
  const {
    addProduct,
    setProducts,
    setLoading,
    products,
    modalIsOpen,
    filteredProducts,
    setFilteredProducts,
    nameSearch,
  } = useContext(ProductContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const token = JSON.parse(localStorage.getItem("@TOKEN") || "");

        const response = await api.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  return (
    <Main>
      <Navbar />
      {modalIsOpen && <ModalViewer />}
      <section className="sec-prod">
        {filteredProducts.length && nameSearch ? (
          <Container>
            <StyledButton type="button" onClick={() => setFilteredProducts([])}>
              Limpar filtro
            </StyledButton>
            <ProductList list={filteredProducts} handleClick={addProduct} />
          </Container>
        ) : (
          <ProductList list={products} handleClick={addProduct} />
        )}
      </section>
    </Main>
  );
};
