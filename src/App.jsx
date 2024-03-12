import { useState } from "react"
import './Estilo.css'

function App() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }

  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  }

  const handleSumar = (event) => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  }

  const handleRestar = (event) => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  }

  const handleMultiplicar = (event) => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  }

  const handleDividir = (event) => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" placeholder="Numero 1" value={numeroUno} onChange={handleChangeUno}></input>
      <input type="text" placeholder="Numero 2" value={numeroDos} onChange={handleChangeDos}></input>
      <hr></hr>
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleMultiplicar}>Multiplicar</button>
      <button onClick={handleDividir}>Dividir</button>
      <hr></hr>
      <p>Resultado: { resultado }</p>
    </>
  )
}

export default App
