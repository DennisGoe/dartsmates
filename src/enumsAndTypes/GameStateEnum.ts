export const GameStateEnum = {
    CREATING: "creating",
    PLAYING: "playing",
    ENDED: "ended",
} as const;

export type GameStateEnum = (typeof GameStateEnum)[keyof typeof GameStateEnum];
