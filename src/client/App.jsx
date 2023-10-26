import { useState, useContext } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
import CharScreen from "./components/CharScreen";
import AuthContext from './state/AuthContext'
import Teams from "./components/Teams";
import NewTeam from "./components/NewTeam";
import CoolCard from "./components/CoolCard";

function App() {
  const {state} = useContext(AuthContext)

  return (
    <div className="App">
    {state.token && <Header />}
    <Routes>
      <Route path="/" element={!state.token ? <AuthScreen /> : <Navigate to='/home' />}
       />
      <Route path="/home" element={state.token ? <HomeScreen /> : <Navigate to='/' />}
       />
      <Route path="/teams" element={state.token ? <Teams /> : <Navigate to="/"/>} />
      <Route path="/newTeam" element={state.token ? <NewTeam /> : <Navigate to="/" />}/>
      <Route path="/charScreen/:id" element={state.token ? <CharScreen /> : <Navigate to='/' />}
       />
    </Routes>
    </div>
  );
}

export default App;
