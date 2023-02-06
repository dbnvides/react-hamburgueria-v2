import { AuthProvider } from "./AuthContext/AuthContext";
import { ProductProvider } from "./ProductContext/ProductContext";
import { IContextProviderProps } from "./types";

const Providers = ({ children }: IContextProviderProps) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
};

export default Providers;
