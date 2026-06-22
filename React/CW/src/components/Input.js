import {Component} from "../core/Component";

export class Input extends Component {
    setup(props) {
        this.$rootElement = document.createElement('input');
        this.$rootElement.classList.add(...props.classes)

        for (const propsKey in this.props.attributes) {
            this.$rootElement.setAttribute(`${propsKey}`, `${this.props.attributes[propsKey]}`)
        }

        this.$rootElement.addEventListener("change", this.props.onChange)
    }
}
