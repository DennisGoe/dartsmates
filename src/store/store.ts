import {combineReducers, configureStore} from "@reduxjs/toolkit";
import gameStatesSlice from "./slices/gameStates.ts";



const combinedReducer = combineReducers({
    gameStates: gameStatesSlice.reducer,
});

const store = configureStore({reducer: combinedReducer});
export type RootState = ReturnType<typeof combinedReducer>;

export default store;
