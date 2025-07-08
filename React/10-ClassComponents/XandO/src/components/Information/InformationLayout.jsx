import {Component} from "react";

export class InformationLayout extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return <label className="text-3xl font-bold underline">{this.props.children}</label>
    }
}