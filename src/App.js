import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Hola from "./Hola";
import Adios from "./Adios";
import "./css/App.css";

function App() {
  return (
    <>
    <header>
    ¿Qué pasa? Restuesta: Ese Header permanece en ambas URL.
    </header>
    <BrowserRouter>
      <Route path="/" exact component={Hola} />
      <Route path="/wiki" component={Adios} />
    </BrowserRouter>
    </>
  );
}

export default App;
