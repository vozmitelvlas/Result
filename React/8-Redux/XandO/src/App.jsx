import {useEffect, useState} from 'react'
import './App.css'
import {InformationContainer} from "./components/Information/InformationContainer.jsx";
import {FieldContainer} from "./components/Field/FieldContainer.jsx";
import {store} from "./store.js";

function App() {
    const [isTimeToRender, setIsTimeToRender] = useState(null)
    const render = () => setIsTimeToRender(!isTimeToRender)

    useEffect(() => {
        return store.subscribe(render)
    }, [isTimeToRender])

    return (
        <>
            <InformationContainer/>
            <FieldContainer/>
        </>
    )
}

export default App
