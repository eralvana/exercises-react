import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Hola from "./Hola";
import Adios from "./Adios";
import Header from "./Header";
import "./css/App.css";

function App() {
  return (
    <>
    <Header>
    </Header>
    <BrowserRouter>
      <Route path="/" exact component={Hola} />
      <Route path="/wiki" component={Adios} />
    </BrowserRouter>
    </>
  );
}

export default App;
