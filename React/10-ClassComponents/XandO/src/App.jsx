import {Information} from "./components/Information/InformationContainer.jsx";
import {Field} from "./components/Field/FieldContainer.jsx";
import './App.css'
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <>
                <Information/>
                <Field/>
            </>
        )
    }
}

export default App
