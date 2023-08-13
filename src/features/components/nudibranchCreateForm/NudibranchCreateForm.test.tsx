import { fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import NudibranchCreateForm from './NudibranchCreateForm';
import { store } from '../../../core/store/store';
import '@testing-library/jest-dom';
import { useNudibranchs } from '../../hooks/use.nudibranchs';

jest.mock('../../hooks/use.nudibranchs', () => ({
  useNudibranchs: jest.fn().mockReturnValue({
    handleCreateNudibranch: jest.fn(),
  }),
}));

describe('Given the NudibranchCreateForm component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <NudibranchCreateForm></NudibranchCreateForm>
          </Router>
        </Provider>
      );
    });
    test('Then it should have a Submit button in the form', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('Then the handleCreateNudibranch function should be called', async () => {
      const form = screen.getByRole('form');
      await fireEvent.submit(form);
      expect(useNudibranchs().handleCreateNudibranch).toHaveBeenCalled();
    });
  });
});
