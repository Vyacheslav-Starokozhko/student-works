import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./components/Aurhorization/Registration";
import Login from "./components/Aurhorization/Login";



function App() {

    return (
        <div className="App">
            <Navbar/>
            <Registration/>
            <Login/>
        </div>
    );
}

export default App;
