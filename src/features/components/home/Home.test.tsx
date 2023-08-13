import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';
import '@testing-library/jest-dom/extend-expect';
import { Nudibranch } from '../../models/nudibranch';

jest.mock('../../hooks/use.nudibranchs', () => ({
  useNudibranchs: jest.fn().mockReturnValue({
    handleLoadNudibranchs: jest.fn(),
    nudibranchs: [
      { id: 1, image: '', specie: '1' },
      { id: 2, image: '', specie: '2' },
    ] as unknown as Nudibranch[],
  }),
}));

jest.mock('../card/CardNudibranch');

test('renders Home component correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />{' '}
      </MemoryRouter>
    </Provider>
  );

  const nudibranchElements = screen.getByRole('list');
  expect(nudibranchElements).toBeInTheDocument();
});
