// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import transactionsReducer from './slices/transactionsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
  },
});

export default store;
