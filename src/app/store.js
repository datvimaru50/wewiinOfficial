import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

import counterReducer from '../features/counterSlice';

const middleware = [thunk];


export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
});

