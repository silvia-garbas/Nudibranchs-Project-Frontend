import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import NudiDetail from './Nudibranch.detail';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

jest.mock('../../hooks/use.nudibranchs', () => ({
  useNudibranchs: jest.fn().mockReturnValue({
    nudibranchs: [
      {
        id: '1',
        specie: 'Glaucus',
        image: { url: 'glaucus.jpg' },
        email: 'a@mail.com',
      },
      {
        id: '2',
        specie: 'Glaucus 2',
        image: { url: 'glaucus2.jpg' },
        email: 'b@mail.com',
      },
    ],
  }),
}));

jest.mock('../../../config', () => ({
  url: '',
}));

describe('Given a NudibranchDetail component', () => {
  describe('When it is intstantiate', () => {
    test('Show character details on the screen from context', () => {
      render(
        <Router initialEntries={['/detail/1']}>
          <Provider store={store}>
            <NudiDetail />
          </Provider>
        </Router>
      );
      const nudibranchDetail = screen.getByText('Glaucus');
      expect(nudibranchDetail).toBeInTheDocument();
    });
  });
});

//RREsolver  import { render, screen } from '@testing-library/react';
// import { MemoryRouter as Router } from 'react-router-dom';
// import '@testing-library/jest-dom';
// import NudiDetail from './Nudibranch.detail';
// import { Provider } from 'react-redux';
// import { store } from '../../../core/store/store';
// // import { Nudibranch } from '../../models/nudibranch';
// describe('Given NudiDetail component', () => {
//   beforeEach(() => {
//     render(
//       <Provider store = {store}>
//         <Router>
//           <NudiDetail></NudiDetail>
//         </Router>
//       </Provider>
//     );
//   });

//   describe('When it is instantiate', () => {
//     test.only('Then it should be in the document', () => {
//       const element = screen.getByRole('list');
//       expect(element).toBeInTheDocument();
//     });
//   });
// });
