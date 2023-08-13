import { Nudibranch } from '../models/nudibranch';
import reducer, {
  NudibranchsState,
  load,
  create,
  deleteById,
  update,
} from './nudibranch.slice'; //IMport create

describe('Given the nudibranchSlice', () => {
  describe('When I use the loadreducer', () => {
    test('Then it should load the nudibranch to the state', () => {
      const mockData: Nudibranch[] = [];
      const state: NudibranchsState = {} as NudibranchsState;
      const newState = reducer(state, load(mockData));
      expect(newState).toEqual({ nudibranchs: mockData });
    });
  });
  describe('When I use the create reducer', () => {
    test('Then', () => {
      const initialMockState = {
        nudibranchs: [
          {
            id: 1,
            name: 'Nudibranch 1',
          },
          { id: 2, name: 'Nudibranch 2' },
        ],
      } as unknown as NudibranchsState;

      const payload = { id: 3, name: 'Nudibranch 3' };
      const newState = reducer(initialMockState, create(payload));

      expect(newState.nudibranchs).toEqual([
        { id: 1, name: 'Nudibranch 1' },
        { id: 2, name: 'Nudibranch 2' },
        { id: 3, name: 'Nudibranch 3' },
      ]);
    });

    describe('When the delete', () => {
      test('Theb', () => {
        const initialMockState = {
          nudibranchs: [
            {
              id: 1,
              name: 'Nudibranch 1',
            },
            { id: 2, name: 'Nudibranch 2' },
          ],
        } as unknown as NudibranchsState;

        const payload = 2;
        const newState = reducer(initialMockState, deleteById(payload));

        expect(newState.nudibranchs).toEqual([
          {
            id: 1,
            name: 'Nudibranch 1',
          },
        ]);
      });
    });

    describe('When the update method', () => {
      test('', () => {
        const initialMockState = {
          nudibranchs: [
            {
              id: 1,
              name: 'Nudibranch 1',
            },
            { id: 2, name: 'Nudibranch 2' },
          ],
        } as unknown as NudibranchsState;

        const payload = { id: 2, name: 'Nudibranch 2.0' };
        const newState = reducer(initialMockState, update(payload));

        expect(newState.nudibranchs).toEqual([
          {
            id: 1,
            name: 'Nudibranch 1',
          },
          { id: 2, name: 'Nudibranch 2.0' },
        ]);
      });
    });

    
  });
});
//  deleteById, update, filter
