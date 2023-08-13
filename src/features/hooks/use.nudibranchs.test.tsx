import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useNudibranchs } from './use.nudibranchs';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../core/store/store';
import userEvent from '@testing-library/user-event';

import { NudibranchRepository } from '../../core/services/nudibranch.repository';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('Given UseNudibranch hook', () => {
  const TestComponent = () => {
    const { handleLoadNudibranchs } = useNudibranchs();
    return (
      <>
        <button onClick={handleLoadNudibranchs}>handleLoad</button>
      </>
    );
  };

  let elements: HTMLElement[];
  beforeEach(async () => {
    (NudibranchRepository.prototype.getAll = jest.fn()),
      await act(() =>
        render(
          <Router>
            <Provider store={store}>
              <TestComponent></TestComponent>
            </Provider>
          </Router>
        )
      );
  });
  describe('When it is called', () => {
    test('Then it should return handleLoadNudibranchs function', () => {
      elements = screen.getAllByRole('button');
      expect(elements[0]).toBeInTheDocument();
    });
    test('Then...', async () => {
      await act(async () => {
        elements = screen.getAllByRole('button');

        await userEvent.click(elements[0]);
        expect(NudibranchRepository.prototype.getAll).toHaveBeenCalled();
      });
    });
  });
});

// import { act, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';

// import { useNudibranchs } from './use.nudibranchs';
// import { MemoryRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from '../../core/store/store';
// import userEvent from '@testing-library/user-event';

// import { NudibranchRepository } from '../../core/services/nudibranch.repository';

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: () => jest.fn(),
// }));

// describe('Given UseNudibranchs hook', () => {
//   const TestComponent = () => {
//     const { handleLoadNudibranchs } = useNudibranchs();
//     return (
//       <>
//         <button onClick={handleLoadNudibranchs}>handleLoad</button>
//       </>
//     );
//   };

//   let elements: HTMLElement[];
//   beforeEach(async () => {
//     (NudibranchRepository.prototype.getAll = jest.fn()),
//       await act(() =>
//         render(
//           <Router>
//             <Provider store={store}>
//               <TestComponent></TestComponent>
//             </Provider>
//           </Router>
//         )
//       );
//   });
//   describe('When it is called', () => {
//     test('Then it should return handleLoadNudibranchs function', () => {
//       elements = screen.getAllByRole('button');
//       expect(elements[0]).toBeInTheDocument();
//     });
//     test('Then...', async () => {
//       await act(async () => {
//         elements = screen.getAllByRole('button');

//         await userEvent.click(elements[0]);
//         expect(NudibranchRepository.prototype.getAll).toHaveBeenCalled();
//       });
//     });
//   });
// });
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: () => jest.fn(),
// }));
// describe('Given UseNudibranchs hook', () => {
//   const TestComponent = () => {
//     const { handleDeleteNudibranch } = useNudibranchs();
//     return (
//       <>
//         <button onClick={handleDeleteNudibranch}>handleDelete</button>
//       </>
//     );
//   };

//   let elements: HTMLElement[];
//   beforeEach(async () => {
//     (NudibranchRepository.prototype.deleteNudibranchById = jest.fn()),
//       await act(() =>
//         render(
//           <Router>
//             <Provider store={store}>
//               <TestComponent></TestComponent>
//             </Provider>
//           </Router>
//         )
//       );
//   });
//   describe('When it is called', () => {
//     test('Then it should return handleDeleteNudibranchs function', () => {
//       elements = screen.getAllByRole('button');
//       expect(elements[0]).toBeInTheDocument();
//     });
//     test('Then...', async () => {
//       await act(async () => {
//         elements = screen.getAllByRole('button');

//         await userEvent.click(elements[0]);
//         expect(NudibranchRepository.prototype.deleteNudibranchById).toHaveBeenCalled();
//       });
//     });
//   });
// });

// import { useDispatch, useSelector } from 'react-redux';
// import { useNudibranchs } from './use.nudibranchs';
// import { getAllNudibranchsAsync } from '../redux/users.slice';
// import { NudibranchRepository } from '../../core/services/nudibranch.repository';
// import { renderHook } from '@testing-library/react';

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// jest.mock('../redux/users.slice', () => ({
//   getAllNudibranchsAsync: jest.fn(),
// }));

// describe('useNudibranchs', () => {
//   const dispatchMock = jest.fn();

//   const nudibranchsMock = { nudibranchs: [] };

//   beforeEach(() => {
//     jest.clearAllMocks();
//     (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
//     (useSelector as jest.Mock).mockImplementation((callback) =>
//       callback({ nudibranchs: nudibranchsMock, users: { token: '1' } })
//     );
//   });

//   test('should call useDispatch and useSelector', () => {
//     renderHook(() => useNudibranchs());

//     expect(useDispatch).toHaveBeenCalled();
//     expect(useSelector).toHaveBeenCalled();
//   });

//   test('should dispatch getAllNudibranchsAsync with the correct repository', () => {
//     const url = 'http://localhost:4400/';
//     const token = '1';

//     global.fetch = jest.fn().mockResolvedValue(() => ({
//       ok: true,
//       status: 300,
//       statusText: 'holi',
//     }));

//     const repo = new NudibranchRepository(url, token);

//     // (repo.getAll as jest.Mock).mockResolvedValue([{}]);

//     const { result } = renderHook(() => useNudibranchs());

//     result.current.handleLoadNudibranchs();

//     expect(dispatchMock).toHaveBeenCalledWith(getAllNudibranchsAsync(repo));
//   });
// });
