import {Component} from '../core/Component';
import {Input} from "./Input";
import {Button} from "./Button";

export class Form extends Component {
    setup(props) {
        this.state = {
            cash: 0
        }
        this.$rootElement = document.createElement('form');
        this.$rootElement.className = 'donate-form';

        const label = document.createElement("label")
        label.textContent = "Введите сумму в $"
        label.className = "donate-form__input-label"

        const input = new Input({
            classes: ["donate-form__donate-input"],
            attributes: {
                type: "number",
                min: 1,
                max: 100,
                required: ""
            },
            onChange: this.handleInput.bind(this)
        })
        this.$input = input.$rootElement

        const button = new Button({
            text: "Задонатить",
            classes: ["donate-form__submit-button"],
            type: "submit"
        })
        this.$button = button.$rootElement

        this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this))
        this.$rootElement.append(label, this.$input, this.$button)
    }

    handleInput(event) {
        this.state.cash = event.target.value

        if (!this.checkValue) {
            this.$button.setAttribute("disabled", "")
        } else{
            this.$button.removeAttribute("disabled")
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.cash)
        this.$input.value = ""
    }

    get checkValue() { // по суте не нужна, тк эти же проверки включает required у input
        return this.state.cash <= 100 && this.state.cash >= 1
    }
}
