import {GameOptionsConfig} from "../configs/GameOptionsConfig.ts";
import {Tab} from "./Tab.tsx";
import {useState} from "react";
import type {GameOptionType} from "../enumsAndTypes/GameOptionType.ts";


export function TabsLayoutContainer() {
    const [selectedGameOption, setSelectedGameOption] = useState<GameOptionType>({key: "501", value: "501"});

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
