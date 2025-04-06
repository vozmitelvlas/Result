import {InformationLayout} from "./InformationLayout.jsx";
import {useSelector} from "react-redux";

export const InformationContainer = () => {
    const isDraw = useSelector(state => state.isDraw)
    const player = useSelector(state => state.player)
    const isEnd = useSelector(state => state.isEnd)

    const title = isDraw ? "Ничья" :
        !isEnd ? `Сейчас ходит: ${player}` :
            `Победу одержал: ${player}`

    return <InformationLayout>{title}</InformationLayout>
}
