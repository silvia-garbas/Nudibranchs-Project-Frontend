// import { render, screen, fireEvent } from '@testing-library/react';
// import { Filter } from './Filter';

// IMPLEMENTAR describe('Filter component', () => {
//   tist('should call handleFilterNudibranchs with the selected Marine zone', () => {
//     const handleFilterNudibranch = jest.fn();
//     jest.mock('../../hooks/use.nudibranchs', () => ({
//       usenudibranchs: () => ({
//         handleFilterNudibranch,
//       }),
//     }));

//     render(<Filter />);

//     const seasonSelect = screen.getByRole('cantabric ocean', { name: /season/i });

//     fireEvent.change(seasonSelect, { target: { value: 'mediterranean sea' } });

//     expect(handleFilterNudibranch).toHaveBeenCalledWith('/?season=mediterranean sea');
//   });
// });
