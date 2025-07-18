import {Request, Table, Login} from "./pages";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import React from "react";
import './App.css'


function App() {
    return (
        <div>
            <Header/>
            <div className="p-3">
                <Routes>
                    <Route path="/" element={<Request/>}></Route>
                    <Route path="/table" element={<Table/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App
