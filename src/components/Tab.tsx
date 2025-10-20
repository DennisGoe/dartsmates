import type { GameOptionType } from "../enumsAndTypes/GameOptionType.ts";

interface TabProps {
    option: GameOptionType;
    selectedGameOption: GameOptionType;
    setSelectedGameOption: (option: GameOptionType) => void;
}

export function Tab({ option, selectedGameOption, setSelectedGameOption }: TabProps) {
    const isSelected = option.key === selectedGameOption.key;

    const handleClick = () => {
        setSelectedGameOption(option);
    }

    return (
        <div
            onClick={handleClick}
            className={`flex-1 px-8  transition-all duration-200 cursor-pointer rounded-full text-center ${
                isSelected ? "bg-highlights glow text-customGray" : "text-white"
            }`}
        >
            {option.value}
        </div>
    );
}
