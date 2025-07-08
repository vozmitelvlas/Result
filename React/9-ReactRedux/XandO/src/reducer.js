const initialState = {
    isDraw: false,
    isEnd: false,
    player: "X",
    field: [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
}

export const appReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case "SET_FIELD":
            return {
                ...state,
                field: state.field.map((cell, i) => payload === i ? state.player : cell)
            }

        case "RESTART_GAME":
            return initialState

        case "SET_PLAYER":
            return {
                ...state,
                player: payload
            }

        case "SET_IS_END":
            return {
                ...state,
                isEnd: true,
                isDraw: !payload,
                player: payload ? payload : ""
            }

        default:
            return state
    }
}
