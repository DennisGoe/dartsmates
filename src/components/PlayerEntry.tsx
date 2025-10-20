import React from 'react';
import type {PlayerType} from "../enumsAndTypes/PlayerType.ts";

interface PlayerEntryProps {
    player: PlayerType;
}

export function PlayerEntry({player}: PlayerEntryProps) {
    return (
        <div className={"w-full justify-between flex items-center gap-x-2 px-2 rounded-lg bg-playerBG py-3"}>
            <span className={"font-semibold text-sm"}>{player?.name}</span>
            <span className={"font-semibold text-sm"}>{player?.score}</span>
        </div>
    );
}
