import "./App.css";
import Login from "./pages/Login/Login";
import Routes from "./routes";
import { useStateValue } from "./StateProvider";
import React from "react";

function App() {
    const [{ user }] = useStateValue();
    return <div className="App">{!user ? <Login /> : <Routes />}</div>;
}

export default App;
