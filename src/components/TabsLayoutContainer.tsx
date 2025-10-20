import {GameOptionsConfig} from "../configs/GameOptionsConfig.ts";
import {Tab} from "./Tab.tsx";
import type {GameOptionType} from "../enumsAndTypes/GameOptionType.ts";

interface TabsLayoutContainerProps {
    selectedGameOption: GameOptionType;
    setSelectedGameOption: (option: GameOptionType) => void;
}

export function TabsLayoutContainer({selectedGameOption, setSelectedGameOption} : TabsLayoutContainerProps) {


    return (
        <div className={"flex w-full bg-customGray p-1 gap-x-1  items-center rounded-full overflow-hidden"}>
            {GameOptionsConfig.map((option) => (
                <Tab
                    option={option}
                    selectedGameOption={selectedGameOption}
                    setSelectedGameOption={setSelectedGameOption}
                    key={option.key}/>
            ))}
        </div>
    );
}
