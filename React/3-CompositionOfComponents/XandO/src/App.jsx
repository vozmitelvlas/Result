import {useState} from 'react'
import './App.css'
import {InformationContainer} from "./components/Information/InformationContainer.jsx";
import {FieldContainer} from "./components/Field/FieldContainer.jsx";



function App() {
    const [player, setPlayer] = useState("X")
    const [isEnd, setIsEnd] = useState(false)
    const [isDraw, setIsDraw] = useState(false)
    const [field, setField] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
    ])

    return (
        <>
            <InformationContainer player={player}
                                  isEnd={isEnd}
                                  isDraw={isDraw}>

            </InformationContainer>
            <FieldContainer field={field}
                            setField={setField}
                            player={player}
                            setPlayer={setPlayer}
                            isEnd={isEnd}
                            setIsEnd={setIsEnd}
                            isDraw={isDraw}
                            setIsDraw={setIsDraw}>
            </FieldContainer>
        </>
    )
}

export default App
