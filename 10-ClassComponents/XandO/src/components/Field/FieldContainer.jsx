import {FieldLayout} from "./FieldLayout.jsx";
import {connect} from "react-redux"
import {Component} from "react";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export class FieldContainer extends Component {
    constructor(props) {
        super(props)
        this.onFieldClick = this.onFieldClick.bind(this)
        this.onRestartClick = this.onRestartClick.bind(this)
    }

    isEndOfGame() {
        for (const pattern of WIN_PATTERNS) {
            if (pattern.every(index => this.props.field[index] === 'X')) {
                this.props.dispatch({type: "SET_IS_END", payload: 'X'})
                return true
            } else if (pattern.every(index => this.props.field[index] === '0')) {
                this.props.dispatch({type: "SET_IS_END", payload: '0'})
                return true
            }
        }
        if (!this.props.field.includes("")) {
            this.props.dispatch({type: "SET_IS_END"})
            return
        }
        return false
    }

    async onFieldClick(event) {
        const index = Number(event.target.dataset.index)
        if (!this.props.field[index] && !this.props.isEnd) {
            await this.props.dispatch({type: "SET_FIELD", payload: index})
            this.props.dispatch({type: "SET_PLAYER", payload: this.props.player === 'X' ? '0' : 'X'})
            this.isEndOfGame()
        }
    }

    onRestartClick() {
        this.props.dispatch({type: "RESTART_GAME"})
    }

    render() {
        return <FieldLayout onFieldClick={this.onFieldClick} onRestartClick={this.onRestartClick} field={this.props.field}/>
    }
}

const mapStateToProps = (state) => ({
    player: state.player,
    isEnd: state.isEnd,
    field: state.field
})

export const Field = connect(mapStateToProps)(FieldContainer)