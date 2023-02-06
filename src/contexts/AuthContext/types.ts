export interface IUser {
  email: string;
  password: string;
}

export interface IAuthProviderValue {
  user: IUserProfile | null;
  loading: boolean;
  userLogin(data: IUser): Promise<void>;
  userRegister(data: IRegisterProfile): Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogout: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUserProfile | null>>;
}

export interface IApiResponse {
  accessToken: string;
  user: IUserProfile;
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface IRegisterProfile {
  name: string;
  email: string;
  password: string;
}
