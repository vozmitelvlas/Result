import {Component} from '../core/Component';
import {getDateFormat, getTimeFormat} from "../utils/utils";
import {Button} from "./Button";

export class ListItem extends Component {
    setup(props) {
        this.state = {
            id: Date.now(),
            date: new Date,
            amount: props.amount
        }

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';
        let b = document.createElement("b");
        b.textContent = this.state.amount + "$";
        let space = document.createTextNode('\u00A0') // пробел добавился только так

        const button = new Button({
            text: "Удалить",
            classes: ["delete-button"],
            type: "button"
        })
        this.$delButton = button.$rootElement
        this.$delButton.addEventListener("click", this.deleteDonate.bind(this))

        this.$rootElement.append(
            getDateFormat(this.state.date, '/') + ', ',
            getTimeFormat(this.state.date, ':'),
            ' -',
            space,
            b,
            this.$delButton
        );
    }

    deleteDonate(event){
        this.props.onDelete(this)
        event.target.closest(".donate-item").remove()
    }
}
