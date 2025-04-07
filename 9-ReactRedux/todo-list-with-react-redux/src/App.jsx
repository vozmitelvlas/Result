import {Navigate, Route, Routes} from "react-router-dom";
import Todo from "./pages/Todo/Todo.jsx";
import styles from "./App.module.css"
import NotFound from "./pages/components/NotFound/NotFound.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {
    return (
        <>
            <div className={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/task/:id" element={<Todo />}/>
                    <Route path="/404" element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to={"/404"}/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App