import { User } from '../src/features/models/user';

export type MenuOptions = {
  url: string;
  label: string;
  protected: boolean;
}[];

export type LoginResponse = {
  token: string;
  user: User;
};
