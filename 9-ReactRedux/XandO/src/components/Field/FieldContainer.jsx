import {FieldLayout} from "./FieldLayout.jsx";
import {useSelector, useDispatch, useStore} from "react-redux"

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export const FieldContainer = () => {
    const dispatch = useDispatch()
    const field = useSelector(state => state.field)
    const isEnd = useSelector(state => state.isEnd)
    const player = useSelector(state => state.player)
    const store = useStore()

    const isEndOfGame = () => {
        const field = store.getState().field
        for (const pattern of WIN_PATTERNS) {
            if (pattern.every(index => field[index] === 'X')) {
                dispatch({type: "SET_IS_END", payload: 'X'})
                return true
            } else if (pattern.every(index => field[index] === '0')) {
                dispatch({type: "SET_IS_END", payload: '0'})
                return true
            }
        }
        if (!field.includes("")) {
            dispatch({type: "SET_IS_END"})
            return
        }
        return false
    }

    const onFieldClick = (event) => {
        const index = Number(event.target.dataset.index)
        if (!field[index] && !isEnd) {
            dispatch({type: "SET_FIELD", payload: index})
            dispatch({type: "SET_PLAYER", payload: player === 'X' ? '0' : 'X'})
            isEndOfGame()
        }
    }
    const onRestartClick = () => dispatch({type: "RESTART_GAME"})

    return (
        <FieldLayout onFieldClick={onFieldClick} onRestartClick={onRestartClick}/>
    )

}