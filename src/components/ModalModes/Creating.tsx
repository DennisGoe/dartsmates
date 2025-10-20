import { TabsLayoutContainer } from "../TabsLayoutContainer.tsx";
import { useState, useEffect } from "react";
import type { GameOptionType } from "../../enumsAndTypes/GameOptionType.ts";
import type { PlayerType } from "../../enumsAndTypes/PlayerType.ts";
import { PlayerList } from "../PlayerList.tsx";
import {AddPlayerButton} from "../AddPlayerButton.tsx";
import {StartGameButton} from "../StartGameButton.tsx";

export function Creating() {
    const [selectedGameOption, setSelectedGameOption] = useState<GameOptionType>({
        key: "501",
        value: "501",
    });

    const [playerList, setPlayerList] = useState<PlayerType[]>([
        { id: "0", name: "Player 1", score: Number(selectedGameOption.key) },
        { id: "1", name: "Player 2", score: Number(selectedGameOption.key) },
    ]);

    useEffect(() => {
        setPlayerList((prev) =>
            prev.map((player) => ({
                ...player,
                score: Number(selectedGameOption.key),
            }))
        );
    }, [selectedGameOption]);

    const handleAddPlayer = () => {
        setPlayerList((prev) => [
            ...prev,
            { id: `${prev.length}`, name: `Player ${prev.length + 1}`, score: Number(selectedGameOption.key) },
        ]);
    }

    const handleStartGame = () => {}

    return (
        <div className="flex flex-col items-center gap-y-5">
            <h2 className="text-white">Neues Spiel erstellen</h2>
            <TabsLayoutContainer
                selectedGameOption={selectedGameOption}
                setSelectedGameOption={setSelectedGameOption}
            />
            <PlayerList playerList={playerList} setPlayerList={setPlayerList} />
            <AddPlayerButton onClick={handleAddPlayer}/>
            <StartGameButton onClick={handleStartGame}/>
        </div>
    );
}
