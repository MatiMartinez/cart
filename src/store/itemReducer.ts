import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ItemState {
  items: Item[];
}

interface Item {
  id: string;
  name: string;
}

const initialState: ItemState = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Item>) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteAll: () => {
      return initialState;
    },
  },
});

export const { create, deleteAll } = counterSlice.actions;

export default counterSlice.reducer;
