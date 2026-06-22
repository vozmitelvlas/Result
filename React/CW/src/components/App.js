import {Component} from '../core/Component';
import {Form} from './Form';
import {List} from './List';
import {ListItem} from './ListItem';

export class App extends Component {
    setup(props) {
        this.state = {
            total: 0,
            donates: []
        }
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        const title = document.createElement("h1")
        title.className = "total-amount"
        title.textContent = props.heading
        this.$rootElement.appendChild(title)

        this.$total = document.createElement("span")
        this.$total.textContent = this.state.total
        title.appendChild(this.$total)

        const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
        this.$rootElement.appendChild(donateForm.$rootElement);

        this.donateList = new List();
        this.$rootElement.appendChild(this.donateList.$rootElement);

    }

    onItemCreate(amount) {
        let item = new ListItem({amount: amount, onDelete: this.onItemDelete.bind(this)})
        this.state.donates.push(item)
        this.donateList.addItem(item.$rootElement)
        this.updateTotal(Number(amount))
    }

    onItemDelete(item) {
        this.updateTotal(-item.state.amount)
        let index = this.state.donates.indexOf(item)
        this.state.donates.splice(index, 1)

    }

    updateTotal(amount) {
        this.state.total += amount
        this.$total.textContent = this.state.total
    }
}
