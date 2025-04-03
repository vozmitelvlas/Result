import {InformationLayout} from "./InformationLayout.jsx";
import {store} from "../../store.js";

export const InformationContainer = () => {
    const {isDraw, isEnd, player} = store.getState()

    const title = isDraw ? "Ничья" :
        !isEnd ? `Сейчас ходит: ${player}` :
            `Победу одержал: ${player}`

    return <InformationLayout>{title}</InformationLayout>
}
