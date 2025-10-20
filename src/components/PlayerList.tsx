import React from 'react';
import type {PlayerType} from "../enumsAndTypes/PlayerType.ts";
import {PlayerEntry} from "./PlayerEntry.tsx";

interface PlayerListProps {
    playerList: PlayerType[];
    setPlayerList: (playerList: PlayerType[]) => void;
}

export function PlayerList({playerList, setPlayerList}: PlayerListProps) {
    return (
        <div className={"w-72 flex flex-col max-h-80 overflow-y-auto gap-y-2 items-center"}>
            {playerList.map((player) => (
                <PlayerEntry player={player} key={player.id}/>
            ))}
        </div>
    );
}
