export interface IProdResponse {
  filter(arg0: (element: any) => boolean): unknown;
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
}

export interface IProviderProduct {
  loading: boolean;
  modalIsOpen: boolean;
  addProduct: (id: number) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<IProdResponse[]>>;
  products: IProdResponse[];
  currentSale: IProdResponse[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  setCurrentSale: React.Dispatch<React.SetStateAction<IProdResponse[]>>;
  totalCash: number | undefined;
  filteredProducts: IProdResponse[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProdResponse[]>>;
  nameSearch: string;
  setNameSearch: React.Dispatch<React.SetStateAction<string>>;
}
