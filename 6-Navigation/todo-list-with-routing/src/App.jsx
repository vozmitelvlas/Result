import {useRequestGetTodos} from "./components/hooks/index.js";
import {Navigate, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos/Todos.jsx";
import Todo from "./components/Todos/Todo.jsx";
import styles from "./App.module.css"
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
    const {todos, setTodos} = useRequestGetTodos()

    return (
        <>
            <div className={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<Todos setTodos={setTodos} todos={todos}/>}>
                        <Route path="/task/:id" element={<Todo setTodos={setTodos}/>}/>
                    </Route>
                    <Route path="/404" element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to={"/404"}/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App