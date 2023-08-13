import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import { AppRoutes } from './App.routes';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';


const MockedComponent = jest.fn().mockReturnValue(<h1>Test</h1>);

jest.mock('../home/Home', () => MockedComponent);
jest.mock('../register/Register', () => MockedComponent);
jest.mock('../login/Login', () => MockedComponent);

describe('Given the AppRoutes component', () => {
  describe('When it is instantiate with a route /', () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Router initialEntries={['/']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        )
      );

      element = screen.getByText('Test');
    });
    test('Then it should render Home', () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is instantiate with a route /register', () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Router initialEntries={['/register']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        )
      );

      element = screen.getByText('Test');
    });
    test('Then it should render Register', () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is instantiate with a route /login', () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Router initialEntries={['/login']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        )
      );

      element = screen.getByText('Test');
    });
    test('Then it should render Login', () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When it is intantiate with a route /nudibranchs', () => {
    let element: HTMLElement
     beforeEach(async () => {
      await act(async () =>
        render(
          <Provider store={store}>
            <Router initialEntries={['/nudibranchs']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        )
      );

      element = screen.getByText('Test');
    });
    test('Then it should render Nudibranchs', () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
  })
});
})
// import { MemoryRouter as Router } from 'react-router-dom';
// import { render, screen, act } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { AppRoutes } from './App.routes';
// import { Provider } from 'react-redux';
// import { store } from '../../../core/store/store';

// describe('Given AppRoutes component', () => {
//   describe('When it is instantiate with a route "/Login" ', () => {
//     const MockedComponentLogin = jest.fn().mockReturnValue(<h2>Login</h2>);

//     jest.mock('../login/Login', () => MockedComponentLogin);
//     let element: HTMLElement;

//     beforeEach(async () => {
//       await act(async () =>
//         render(
//           <Provider store={store}>
//             <Router initialEntries={['/Login']} initialIndex={0}>
//               <AppRoutes></AppRoutes>
//             </Router>
//           </Provider>
//         )
//       );

//       element = screen.getByText('Login');
//     });

//     test('Then it should render register page', () => {
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe('When it is instantiate with a route "/Register" ', () => {
//     const MockedComponentRegister = jest
//       .fn()
//       .mockReturnValue(<h2>Register</h2>);

//     jest.mock('../register/Register', () => MockedComponentRegister);

//     let element: HTMLElement;

//     beforeEach(async () => {
//       await act(async () =>
//         render(
//           <Provider store={store}>
//             <Router initialEntries={['/Register']} initialIndex={0}>
//               <AppRoutes></AppRoutes>
//             </Router>
//           </Provider>
//         )
//       );

//       element = screen.getByText('Register');
//     });

//     test('Then it should render register page', () => {
//       expect(element).toBeInTheDocument();
//     });
//   });
// })
