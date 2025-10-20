interface StartGameButtonProps {
    onClick: () => void;
}

export function StartGameButton({onClick}: StartGameButtonProps) {
    return (
        <div className={"w-full cursor-pointer hover:shadow-lg text-white bg-highlights rounded-lg py-3 flex items-center justify-center glow"}>
            Spiel Starten
        </div>
    );
}
