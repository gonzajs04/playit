import { Link } from "@remix-run/react";
import { timer } from "../helpers/helpers";
import { useState } from "react";

export default function Typing({ data }) {
  const [words, setWords] = useState(data[1]);
  const [currentWordPosition, setCurrentWordPosition] = useState(0);
  const [lastWord, setLastWord] = useState("");

  function handleInputChange(e) {
    const inputValue = e.target.value.toUpperCase();
    setLastWord(inputValue);

    if (inputValue == words[currentWordPosition]?.toUpperCase()) {
      setCurrentWordPosition((prev) => prev + 1);
      setLastWord("");
      return;
    }
  }

  return (
    <div className="game">
      <div className="timer">
       {/*TODO HACER TIMER */}

      </div>

      <div className="input-word">
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
        <p>{words[currentWordPosition]}</p>
      </div>

      <Link to={"/juegos"} className="buttonLink">
        Volver
      </Link>
    </div>
  );
}
