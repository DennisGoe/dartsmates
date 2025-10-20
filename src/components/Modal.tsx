import {GameStateEnum} from "../enumsAndTypes/GameStateEnum.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {Creating} from "./ModalModes/Creating.tsx";

export function Modal() {
    const gameState = useSelector((state: RootState) => state.gameStates.gameState);

    const Content = {
        [GameStateEnum.CREATING]: <Creating/>,
        [GameStateEnum.PLAYING]: <div>Playing</div>,
        [GameStateEnum.ENDED]: <div>Ended</div>
    }[gameState];


    return (
        <div className={"w-1/3 bg-modalBG rounded-lg shadow-2xl flex flex-col  gap-y-8 items-center py-4 "}>
            <h1 className={"text-2xl"}>Darts Mates</h1>
            {Content}
        </div>
    );
}
