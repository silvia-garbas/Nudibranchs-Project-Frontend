import { createSlice } from '@reduxjs/toolkit';
import { Nudibranch } from '../models/nudibranch';

export type NudibranchsState = {
  nudibranchs: Nudibranch[];
};

const initialState: NudibranchsState = {
  nudibranchs: [],
};

const sliceNudibranch = createSlice({
  name: 'nudibranchs',
  initialState,
  reducers: {
    load: (state, { payload }) => ({
      ...state,
      nudibranchs: payload,
      // state.nudibranchs = action.payload;
    }),
    create: (state, { payload }) => ({
      ...state,
      nudibranchs: [...state.nudibranchs, payload],
      //
      // state.nudibranchs = action.payload;
    }),
    deleteById: (state, { payload }) => ({
      ...state,
      nudibranchs: state.nudibranchs.filter(
        (nudibranch) => nudibranch.id !== payload
      ),
    }),
    update: (state, { payload }) => ({
      ...state,
      nudibranchs: state.nudibranchs.map((nudibranch) =>
        nudibranch.id === (payload as Nudibranch).id
          ? (payload as Nudibranch)
          : nudibranch
      ),
    }),
    // Implementar filter: (state, { payload }) => ({
    //   ...state,
    //   nudibranchs: payload.items,
    // }),
  },
});

export const { load, create, deleteById, update } = // Implementar filter
  sliceNudibranch.actions;
export default sliceNudibranch.reducer;


