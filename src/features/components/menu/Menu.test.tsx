import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './Menu';
import { MenuOptions } from '../../../../types/menu.options';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';


describe('Given Menu Componente', () => {
  describe('When it is rendered with one option  ', () => {
    const options: MenuOptions = [
      { label: 'Home', url: '/', protected: false },
      { label: 'Login', url: '/login', protected: true },
    ];

    render(
      <Provider store={store}>
        <Router>
          <Menu options={options}></Menu>
        </Router>
      </Provider>
    );
    const elementNav = screen.getByRole('navigation');
    const elementOption = screen.getByText(options[0].label);

    test('Then the option should be in the document', () => {
      expect(elementNav).toBeInTheDocument();
      expect(elementOption).toBeInTheDocument();
    });
  });
});
