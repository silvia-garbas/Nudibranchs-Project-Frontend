import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/use.users';
import { SyntheticEvent, useState } from 'react';
import { User } from '../../models/user';
import './login.scss';
import Swal from 'sweetalert2';


export default function Login() {
  const { handleLoginUser } = useUsers();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false);


  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const loggedUser = {
      email: (element.elements.namedItem('email') as HTMLInputElement).value,
      password: (element.elements.namedItem('password') as HTMLInputElement)
        .value,
    } as Partial<User>;
    if (!loggedUser.email || !loggedUser.password) {
      setAuthError(true);
      navigate('/login');
      return;
    }
    const loginSuccess = await handleLoginUser(loggedUser);
    if (loginSuccess !== undefined) {
      navigate('/home');
      Swal.fire({
        icon: 'success',
        title: 'Logged in.',
      });
    } else {
      setAuthError(true);
    }
    handleLoginUser(loggedUser as Partial<User>);
    console.log(loggedUser);
    element.reset();
    navigate('/home');
  };

  return (
    <>
      <div className="form-wrapper">
        {authError && (
          <p className="error-message">Invalid email or password.</p>
        )}
        <form className="login-form" aria-label="form" onSubmit={handleSubmit}>
          <h2 className="title_form">Login</h2>
          <div>
            {/* <label htmlFor="email"> email: </label> */}
            <input type="text" placeholder="email" id="email" name="email" />
          </div>
          <div>
            {/* <label htmlFor="password">password: </label> */}
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="login_button">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
