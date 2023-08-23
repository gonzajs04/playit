import Mensaje from './Mensaje'
import Volver from './Volver'

import { useEffect, useState } from "react";

export default function Typing({ data }) {
  const [words, setWords] = useState(data[1]);
  const [currentWordPosition, setCurrentWordPosition] = useState(0);
  const [lastWord, setLastWord] = useState("");
  const[winner,setWinner] = useState(false)

  function handleInputChange(e) {
    const inputValue = e.target.value.toUpperCase();
    setLastWord(inputValue);

    if (inputValue == words[currentWordPosition]?.toUpperCase()) {
      setCurrentWordPosition((prev) => prev + 1);
      setLastWord("");
      return;
    }

  }

  function resetearJuego(){
   
     setLastWord("");
      setCurrentWordPosition(0)
      setWinner(false)
  }


  return (

    <div className="game">
   
    {currentWordPosition === data[1].length &&(
       
       <div className="container-mensaje" style={{position:"absolute"}}>
       
        <Mensaje>GANASTE! Juega de nuevo si los deseas</Mensaje>

        <button  className="play-again" onClick={resetearJuego}>Jugar de nuevo</button>

      </div>

    )}

      <div className="input-word" >
        <div className="cant-palabras">
          <p style={{ color: "white", textAlign: "center", fontSize: "3rem" }}>
            {currentWordPosition}
          </p>
        </div>
        <p className="consigna">Escribe la palabra</p>
        <p className="simple-text">{words[currentWordPosition]}</p>
        <input
        
          type="text"
          value={lastWord}
          onChange={handleInputChange}
          style={{
            backgroundColor: "#08080b",
            outline: "none",
            color: "greenyellow",
            border: "none",
            borderBottom: "2px dashed green",
            padding: ".7rem 0rem",
          }}
        />
       
      </div>

        <Volver>/juegos</Volver>
    
    </div>

  );
}
