import { Nudibranch } from "./nudibranch";

export type User = {
  id: string;
  email: string;
  password: string;
  isLogged: boolean;
  token: string;
};

export type ApiResponse = {
  items: Nudibranch[];
};
