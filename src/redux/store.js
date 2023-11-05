import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import programSlice from "./programs/program";

const rootReducer = combineReducers({
    program : programSlice,
})

export const store = configureStore({
    reducer : rootReducer
})