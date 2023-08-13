 import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import '@testing-library/jest-dom/extend-expect';

describe('Given login form', () => {
  describe('When login form is used', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Login></Login>
          </MemoryRouter>
        </Provider>
      );
    });
    test('Then if a user fills the login form and clicks submit', () => {
      const usernameInput = screen.getByPlaceholderText('email');
      const passwordInput = screen.getByPlaceholderText('password');
      const submitButton = screen.getByText('Send');

      userEvent.type(usernameInput, 'test');
      userEvent.type(passwordInput, 'test');

      fireEvent.click(submitButton);

      expect(usernameInput).toHaveValue('');
      expect(passwordInput).toHaveValue('');
    });
    test('Then it should render the login form', () => {
      const loginForm = screen.getByRole('heading', { name: 'Login' });

      expect(loginForm).toBeInTheDocument();
    });
  });
});

// RESOLVER import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { MemoryRouter as Router } from 'react-router-dom';
// import Login from './Login';
// import { store } from '../../../core/store/store';
// import { useUsers } from '../../hooks/use.users';

// jest.mock('../../hooks/use.users', () => ({
//   useUsers: jest.fn().mockReturnValue({
//     handleLoginUser: jest.fn(),
//   }),
// }));
// describe('Given Login component', () => {
//   describe('When the component is rendered', () => {
//     beforeEach(() => {
//       render(
//         <Provider store={store}>
//           <Router>
//             <Login></Login>
//           </Router>
//         </Provider>
//       );
//     });
//     test('Then the heading <h2> should be in the document', () => {
//       const element = screen.getByRole('button ');
//       expect(element).toBeInTheDocument();
//     });

//     test('Then the <button> should be used', async () => {
//       const form = screen.getByRole('Send');
//       await fireEvent.submit(form);
//       expect(useUsers().handleLoginUser).toHaveBeenCalled();
//     });
//   });
// });

// import { render, screen, fireEvent } from '@testing-library/react';

// import { MemoryRouter, useNavigate } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from '../../../core/store/store';
// import Login from './Login';
// import '@testing-library/jest-dom/extend-expect';

// jest.mock('../../hooks/use.users', () => ({
//   useUsers: jest.fn().mockReturnValue({
//     handleLogin: jest.fn(),
//   }),
// }));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// describe('Login Component', () => {
//   test('renders login form', () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Login />
//         </MemoryRouter>
//       </Provider>
//     );

//     const loginForm = screen.getByText('Login');
//     expect(loginForm).toBeInTheDocument();
//   });

//   test('navigates to registration page when "orREGISTER" button is clicked', () => {
//     const navigateMock = jest.fn();
//     (useNavigate as jest.Mock).mockReturnValue(navigateMock);
//     const { getByRole } = render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Login />
//         </MemoryRouter>
//       </Provider>
//     );

//     const registerButton = getByRole('button', { name: 'Send' });
//     fireEvent.click(registerButton);

//     expect(navigateMock).toHaveBeenCalledWith('/login');
//   });

//   test('displays error message when login fails', async () => {
//     // ...
//   });
// });
