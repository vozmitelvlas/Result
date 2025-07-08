import {FieldLayout} from "./FieldLayout.jsx";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const FieldContainer = ({field, setField, player, setPlayer, setIsEnd, isEnd,setIsDraw}) => {

    const isWin = (field) => {
        for (const pattern of WIN_PATTERNS) {
            if (pattern.every(index => field[index] === 'X')) {
                setPlayer("X")
                return true;
            }
            if (pattern.every(index => field[index] === '0')) {
                setPlayer("0")
                return true;
            }
        }
        return false
    }
    const isDraw = (field) => {
        return !field.includes("")
    }

    const onFieldClick = (event) => {
        const index = event.target.dataset.index
        if (!field[index] && !isEnd) {
            let tmpField = [...field]
            tmpField[index] = player

            if (player === 'X') setPlayer("0")
            else setPlayer("X")

            setField(tmpField)

            if(isWin(tmpField)){
                setIsEnd(true)
            }
            if(isDraw(tmpField)){
                setIsDraw(true)
            }
        }
    }
    const onRestartClick = () => {
        setPlayer("X")
        setIsEnd(false)
        setIsDraw(false)
        setField([
            '', '', '',
            '', '', '',
            '', '', '',
        ])
    }
    return <FieldLayout field={field} onFieldClick={onFieldClick} onRestartClick={onRestartClick}></FieldLayout>
}