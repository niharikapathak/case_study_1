// src/redux/transactionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (tx,index) => index !== action.payload
      );
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (tx) => tx.id === action.payload
      );
      if (index >= 0) {
        state.transactions[index] = action.payload;
      }
    },
  },
});

export const { addTransaction, removeTransaction, updateTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
