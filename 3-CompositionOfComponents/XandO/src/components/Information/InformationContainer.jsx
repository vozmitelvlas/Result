import {InformationLayout} from "./InformationLayout.jsx";

export const InformationContainer = ({isDraw, player, isEnd}) => {
    let title = isDraw ? "Ничья" :
        !isEnd ? `Сейчас ходит: ${player}` :
            `Победу одержал: ${player}`

    return <InformationLayout>{title}</InformationLayout>
}
