import { Component } from '../core/Component';
import {ListItem} from "./ListItem";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const title = document.createElement("h2")
    title.className = "donates-container__title"
    title.textContent = "Список донатов"


    this.$donates = document.createElement("div")
    this.$donates.className = "donates-container__donates"

    this.$rootElement.append(title, this.$donates)
  }

  addItem(item) {
    this.$donates.append(item)
  }
}