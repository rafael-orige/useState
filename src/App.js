import React, { useState } from "react";  //Importando o useState
import "./App.css";

function App() {
  const [ numero, setNumero ] = useState(0);  //Criando a variável

  function acrescentarNumero() {
    setNumero(numero + 1);  //Alterando a variável
  }

  return (
    <>
      <p>Contador: {numero}</p>
      <button onClick={acrescentarNumero}>+1</button>
    </>
  );
};

export default App;