import {InformationLayout} from "./InformationLayout.jsx";
import {connect} from "react-redux";
import {Component} from "react";

export class InformationContainer extends Component {
    constructor(props) {
        super(props)
    }

    getTitle(props) {
        return props.isDraw ? "Ничья" :
            !props.isEnd ? `Сейчас ходит: ${props.player}` :
                `Победу одержал: ${props.player}`
    }

    render() {
        const title = this.getTitle(this.props)
        return <InformationLayout>{title}</InformationLayout>
    }
}

const mapStateToProps = (state) => ({
    isDraw: state.isDraw,
    player: state.player,
    isEnd: state.isEnd
})

export const Information = connect(mapStateToProps)(InformationContainer)