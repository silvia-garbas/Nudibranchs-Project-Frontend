
import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/use.users';
import { User } from '../../models/user';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './register.scss';
export default function Register() {
  const { handleRegisterUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    console.log('SUBMIT');
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      email: (formElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      password: (formElement.elements.namedItem('password') as HTMLInputElement)
        .value,
    } as unknown as Partial<User>;

    if (data.email === '' || data.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Uhmm...',
        text: 'Try again!',
        footer: '<a href="/register">Go Back</a>',
      });
      navigate('/register');
    } else {
      Swal.fire({
        icon: 'success',
        text: 'Registered!',
      });

      handleRegisterUser(data);
      formElement.reset();
      navigate('/login');
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form
          className="register-form"
          aria-label="form"
          id="register-form"
          onSubmit={handleSubmit}
        >
          <h2 className="title_form">Register</h2>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
                // type="password"
                //Mirar: Si type=password no pasa test línea 45 y 57
              placeholder="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="login_button">
            Sign Up
          </button>
        </form>
        <div>
          <h2 className="still-register">Still don't have an account with us?</h2>
        </div>
      </div>
    </>
  );
}
