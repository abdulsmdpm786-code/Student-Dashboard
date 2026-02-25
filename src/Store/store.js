import {configureStore} from '@reduxjs/toolkit';
import  DataSlice  from './Slice/DataSlice';

export const store = configureStore({
    reducer: {
        notes: DataSlice,
    }
})