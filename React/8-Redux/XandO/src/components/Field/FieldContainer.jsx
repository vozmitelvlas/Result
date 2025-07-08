import {FieldLayout} from "./FieldLayout.jsx";
import {store} from "../../store.js";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export const FieldContainer = () => {
    const isEndOfGame = () => {
        const {field} = store.getState()
        for (const pattern of WIN_PATTERNS) {
            if (pattern.every(index => field[index] === 'X')) {
                store.dispatch({type: "SET_IS_END", payload: 'X'})
                return true
            } else if (pattern.every(index => field[index] === '0')) {
                store.dispatch({type: "SET_IS_END", payload: '0'})
                return true
            }
        }
        if (!field.includes("")) {
            store.dispatch({type: "SET_IS_END"})
            return
        }
        return false
    }

    const onFieldClick = (event) => {
        const {field, isEnd, player} = store.getState()
        const index = event.target.dataset.index

        if (!field[index] && !isEnd) {
            store.dispatch({type: "SET_FIELD", payload: Number(index)})
            store.dispatch({type: "SET_PLAYER", payload: player === 'X' ? '0' : 'X'})
            isEndOfGame()
        }
    }
    const onRestartClick = () => store.dispatch({type: "RESTART_GAME"})

    return (
        <FieldLayout onFieldClick={onFieldClick} onRestartClick={onRestartClick}/>
    )

}