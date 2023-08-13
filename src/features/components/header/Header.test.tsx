import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { MemoryRouter as Router } from 'react-router-dom';
import { store } from '../../../core/store/store';
import { Provider } from 'react-redux';

describe('Given a Header component', () => {
  describe('When it is intantiated', () => {
    render(
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    );
    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});

// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { Header } from './Header';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// describe('Given Header component', () => {
//   describe('When it is instantiate', () => {
//     beforeEach(() => {
//       render(
//       <Header>
//       <h1>Test</h1>;
//       </Header>
//       )
//     });

//     test('Then it should be in the document', () => {
//       const element = screen.getAllByText('heading');
//       expect(element).toBeInTheDocument();
//     });
//     // test('it should display props values', () => {
//     //   const elementTitle = screen.getByText('');
//     //   expect(elementTitle).toBeInTheDocument();
//     // });
//     test('it should display child values', () => {
//       const elementTitle = screen.getByText('Test');
//       expect(elementTitle).toBeInTheDocument();
//     });
//   });
// });
