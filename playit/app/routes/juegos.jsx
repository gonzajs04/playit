import styles from "../styles/juegos.css";
import { useState } from "react";
import { Link } from "@remix-run/react";
import Juego from "../components/Juego";
import arrow from "../../public/img/arrow.png";
import typing from '../../public/img/typing.png'
import tateti from '../../public/img/tateti.png'
export function meta() {
  return [{ title: "PlayIT - Selecciona un juego" }];
}
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Juegos() {
  const [juegos, setJuegos] = useState([
    { id: 1, nombre: "Typing", abreviacion: "TY", url: "typing", img: typing },
    { id: 2, nombre: "Ta-te-ti", abreviacion: "TA", url: "tateti", img: tateti },
  ]);
  return (
    <div className="contenedor centrado">
      <h1 className="title">Seleccione juego para empezar</h1>
      <div className="container-juegos">
        {juegos.map((juego) => (
          <Juego juego={juego} key={juego.id} />
        ))}
      </div>

      <div className="container-arrow"   style={{ backgroundColor: "#8427A9", borderRadius: "50%"   }}>
        <Link
          to={"/"}
        >
          <picture>
            <img loading="lazy" src={arrow} alt="flecha volver" />
          </picture>
        </Link>
      </div>
    </div>
  );
}
