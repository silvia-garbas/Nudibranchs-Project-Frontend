import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { CardNudibranch } from './CardNudibranch';
import { Nudibranch } from '../../models/nudibranch';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';
// import { useNudibranchs } from '../../hooks/use.nudibranchs';
// import userEvent from '@testing-library/user-event';


const mockNudi = {
  id: '1',

  image: {
    url: 'glaucus.jpg',
  },
  specie: 'Glaucus',
  marinezone: 'Mediterranean Sea',
};
describe('Given Card component', () => {
  describe('When it is intantiate', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <CardNudibranch
              nudibranch={mockNudi as Nudibranch}
            ></CardNudibranch>
          </Router>
        </Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('listitem');
      expect(element).toBeInTheDocument();
    });
  });
    // Resolver  tist('Then the handleDeleteNudibranch should be called when DELETE button is clicked', async () => {
    //    const deleteButton = screen.getAllByRole('button');
    //    await userEvent.click(deleteButton[0]);
    //    expect(useNudibranchs().handleDeleteNudibranch).toHaveBeenCalled();
    //  });
});

