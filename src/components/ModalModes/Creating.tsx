import {TabsLayoutContainer} from "../TabsLayoutContainer.tsx";


export function Creating() {
    return (
        <div className={"flex flex-col items-center gap-y-5"}>
            <h2 className={"text-white"}>Neues Spiel erstellen</h2>
            <TabsLayoutContainer/>
        </div>
    );
}
