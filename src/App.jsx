import "./App.css";
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }
const [visivel, setVisivel] = useState(false);

const [nome, setNome] = useState("");

const {mostrarSaudacao,setMostrarSaudacao} = useState(true);



  return (
    <div className="cartao">
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={() => setContador(0)}>Zerar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir 1</button>

      <button onClick={() => setVisivel(!visivel)}>
  Alternar aviso
</button>

{visivel && <p>O aviso está visível.</p>}


<p>Olá, {nome || "visitante"}!</p>
<input type='text' placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />  

<button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
  {mostrarSaudacao ? "Ocultar Saudação" : "Mostrar Saudação"}
</button>

{mostrarSaudacao && <p>Olá, {nome || "visitante"}!</p>}

    </div>
  );
}
export default Contador;