import { Link } from "@remix-run/react";
import { useState } from "react";
import Cuadrado from "./Cuadrado";
import Mensaje from "./Mensaje";
export default function Tateti() {
  const [tabla, setTabla] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState("X");
  const [ganador, setGanador] = useState('');

  const POSICIONES_VICTORIA = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 5, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const TURNOS = {
    X: "X",
    O: "O",
  };

  function verificarGanador(tabla) {
    for (const posicion of POSICIONES_VICTORIA) {
      const [pos1, pos2, pos3] = posicion; //OBTENGO LAS 3 POSICIONES GANADORAS DE CADA ALTERNATIVA

      if (
        tabla[pos1] &&
        tabla[pos1] === tabla[pos2] &&
        tabla[pos1] === tabla[pos3]
      ) {
        return tabla[pos1];
      }
    }
  }

  function handleClickTurno(i) {
    const nuevaTabla = [...tabla];
    if (nuevaTabla[i] || ganador) return;
    
    nuevaTabla[i] = turno;
    setTabla(nuevaTabla);
    setTurno(turno === TURNOS.X ? TURNOS.O : TURNOS.X);

    const gano = verificarGanador(nuevaTabla);
    if (gano) {
      setGanador(() => {
        // AL SER ASINCRONICA LA ACTUALIZACION, DEBEMOS HACER UN CALLBACK PARA QUE SE HAGA INSTANTANEAMENTE EL CAMBIO
        return gano;
      });
    }
    
  }

  function resetearJuego() {
    setTabla(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador('')
  }

  return (
    <div className="game">
      

      {ganador && (
        <div
          className="container-mensaje"
          style={{
            color: "white",
            padding: "10rem 8rem",
            background: "#100F10",
            border: "2px solid green",
            position: "relative",
            top: "30%",
            opacity: ".8",
            borderRadius: "20px",
            textTransform: "uppercase",
            fontWeight: "800",
            textAlign: "center",
            margin: "0",
          }}
       
        >
          <Mensaje>Ganador {ganador}</Mensaje>

          <button style={{ border:"none",outline:"none", background:"transparent", padding:".5rem .5rem", border:"1px solid white", borderRadius:"12px", color:"white", textTransform:"uppercase",fontWeight:"bold"}}onClick={resetearJuego}>Jugar de nuevo</button>
        </div>
      )}

      <div className="contenido-tateti">
        <div
          className="tateti"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
        >
          {tabla.map((tabla, i) => (
            <div
              className="container-cuadrado"
              key={i}
              onClick={() => handleClickTurno(i)}
            >
              <Cuadrado tabla={tabla} />

            
            </div>
          ))}
        </div>

        <Link to={"/juegos"} className="buttonLink">
          Volver
        </Link>
        <p style={{ color: "white" }}>Turno de</p>
        <div className="turnos">
          <p className={`turnos-p ${turno == TURNOS.X && "active"}`}>
            {TURNOS.X}
          </p>
          <p className={`turnos-p ${turno == TURNOS.O && "active"}`}>
            {TURNOS.O}
          </p>
        </div>
      </div>
    </div>
  );
}
