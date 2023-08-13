import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../core/store/store';
import { useMemo } from 'react';
import { ac, loginUserAsync, registerUserAsync } from '../redux/users.slice';
import { User } from '../models/user';
import { UserRepository } from '../../core/services/user.repository';


export function useUsers() {
  const { currentUser, token } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();
  const url = 'http://localhost:4400/';

  const repo: UserRepository = useMemo(() => new UserRepository(url), []);

  const handleRegisterUser = async (user: Partial<User>) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  // MIRAR const handleLoginUser = async (user: Partial<User>): Promise<boolean> => {
  //   await dispatch(loginUserAsync({ repo, user }));
  //   const loggedUser = store.getState().users.currentUser;
  //   console.log(loggedUser);
  //   localStorage.setItem('userToken', loggedUser.token as string);
  //   return !!loggedUser.token;
  // };
  const handleLoginUser = async (user: Partial<User>): Promise<void> => { ///de alejandro, pero me da error
    await dispatch(loginUserAsync({ repo, user })); }



  const handleGetToken = (token: string) => {
    dispatch(ac.getToken(token));
  };

  const handleLogoutUser = () => {
    dispatch(ac.logoutUser());
    localStorage.removeItem('userToken');
  };

  return {
    handleRegisterUser,
    handleLoginUser,
    handleGetToken,
    handleLogoutUser,
    currentUser,
    token,
  };
}
