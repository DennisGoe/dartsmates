import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {GameStateEnum} from "../../enumsAndTypes/GameStateEnum.ts";


interface gameStatesInterface {
    gameState:GameStateEnum
}

const initialState : gameStatesInterface = {
   gameState: GameStateEnum.CREATING
};


const gameStatesSlice = createSlice({
    name: "gameStatesSlice",
    initialState,
    reducers: {
        setGameState(state, action: PayloadAction<GameStateEnum>) {
            state.gameState = action.payload
        }
    }
});

export default gameStatesSlice;
