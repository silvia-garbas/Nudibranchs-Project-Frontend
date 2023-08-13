import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/use.users';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';
import { Menu } from '../menu/Menu'; //
import { MenuOptions } from '../../../../types/menu.options';

import styles from './Header.module.scss';

export function Header() {
  const menuOptions: MenuOptions = [
    {
      url: 'home',
      label: 'Home',
      protected: false,
    },
    { url: 'nudibranchs', label: 'Edit your captures', protected: true },
    { url: 'nudibranchs', label: 'Share your captures', protected: true },
  ];

  const { handleLogoutUser } = useUsers();
  const navigate = useNavigate();

  const { token} = useSelector((state: RootState) => state.users);


  const handleUser = () => {
    if (token) {
      runLogout();
    } else {
      navigate('/login');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleNudibranchList = () => {
    navigate('/login');
  };

  const runLogout = () => {
    handleLogoutUser();
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="title">
            <h1>NUDIBRANCHS' BESTIES DIVER CLUB</h1>
          </div>
        </div>
        <div className={styles.login}>
          <Menu options={menuOptions}></Menu>
          <div>
            {token ? (
              <>
                <span>Welcome! Enjoy!</span>{' '}

                <button className="logout" onClick={handleUser}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="custom-button"
                  onClick={handleNudibranchList}
                >
                  Nudibranchs
                </button>
                <button className="custom-button" onClick={handleRegister}>
                  Register
                </button>
                <button className="custom-button" onClick={handleUser}>
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

    //En liena 25: RESOLVER ' línea 66: const { token, currentUser } = useSelector(
    //   (state: RootState) => state.users
    // ); {/*Resolver
             // En línea 63   {'Welcome,     ' + currentUser.email + '!'}*/}
