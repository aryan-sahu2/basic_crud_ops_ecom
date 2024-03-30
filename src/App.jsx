import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
