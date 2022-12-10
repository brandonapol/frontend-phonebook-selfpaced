import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice';

// This code actually creates the 'database' aka store that we will use
export const store = configureStore({
    reducer,
    devTools: true
})