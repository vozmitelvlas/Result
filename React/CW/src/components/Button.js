import { Component } from '../core/Component';

export class Button extends Component {
    setup(props) {
        this.$rootElement = document.createElement('button');
        this.$rootElement.textContent = props.text;
        this.$rootElement.type = this.props.type
        this.$rootElement.classList.add(...this.props.classes)
    }
}
