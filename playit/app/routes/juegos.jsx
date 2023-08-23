import styles from "../styles/juegos.css";
import { useState } from "react";
import Juego from "../components/Juego";
import Volver from '../components/Volver'
import typing from '../../public/img/typing.png'
import tateti from '../../public/img/tateti.png'
import typingw from '../../public/img/compressed/typingw.webp'
import tatetiw from '../../public/img/compressed/tatetiw.webp'


export function meta() {
  return [
    { title: "PlayIT - Juegos" },
    { name:"description", content: "Ponte a prueba con estos juegos" },
    { viewport: "width=device-width, initial-scale=1" },
  ];
}
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}



export default function Juegos() {
  const [juegos, setJuegos] = useState([
    { id: 1, nombre: "Typing", abreviacion: "TY", url: "typing", img: typing,imgw:typingw },
    { id: 2, nombre: "Ta-te-ti", abreviacion: "TA", url: "tateti", img: tateti, imgw:tatetiw },
  ]);
  return (
    <div className="contenedor centrado">

      <div className="games">

   
      <h1 className="title title-game">Seleccione juego para empezar</h1>
      <div className="container-juegos">
        {juegos.map((juego) => (
          <Juego juego={juego} key={juego.id} />
        ))}
      </div>


      <Volver>/</Volver>
      </div>
    </div>
  );
}
