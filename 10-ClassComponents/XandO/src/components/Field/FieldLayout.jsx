import {Component} from "react";

export class FieldLayout extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <div className="h-40 w-40 m-auto mt-5 grid grid-cols-3 gap-2">
                    {this.props.field.map((cell, ind) => (
                        <button key={ind} data-index={ind} onClick={this.props.onFieldClick}>{cell}</button>
                    ))}
                </div>
                <button className="restart mt-5" onClick={this.props.onRestartClick}>Начать заново</button>
            </>
        )
    }
}