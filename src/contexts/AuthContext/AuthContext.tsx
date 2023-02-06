import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iDefaultErrorResponse } from "../../pages/register/FormRegister/types";
import { api } from "../../services/api";
import { setLocalStorage } from "../../services/localStorage";
import { IContextProviderProps } from "../types";
import { IAuthProviderValue, IUserProfile, IUser, IApiResponse, IRegisterProfile } from "./types";

export const AuthContext = createContext({} as IAuthProviderValue);

export const AuthProvider = ({ children }: IContextProviderProps) => {
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  const userLogin = async (data: IUser): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post<IApiResponse>("/login", data);
      setUser(response.data.user);
      setLocalStorage("@USERID", response.data.user.id);
      setLocalStorage("@TOKEN", response.data.accessToken);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      const nameError = JSON.stringify(currentError.response?.data);
      if (nameError) {
        if (nameError === '"Cannot find user"') {
          toast.error("Usuario não encontrado");
        } else {
          toast.error("Senha incorreta!");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: IRegisterProfile): Promise<void> => {
    try {
      setLoading(true);
      await api.post<IApiResponse>("/users", data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      const nameError = JSON.stringify(currentError.response?.data);
      if (nameError) {
        toast.error("Email já existe");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const tokenValidate = localStorage.getItem("@TOKEN");

      if (!tokenValidate) {
        setLoading(false);
        return;
      }
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      const userID = JSON.parse(localStorage.getItem("@USERID") || "");

      try {
        const { data } = await api.get(`/users/${userID}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        toast.error("Usuario deslogado!");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userLogin,
        userRegister,
        userLogout,
        setLoading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
