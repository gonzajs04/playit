
import { Link } from "@remix-run/react";
export default function Juego({juego}){
    return(
        <div className="container-juego">
            <div className="imagen-juego"><img loading="lazy" src={juego.img} alt={`imagen juego ${juego.nombre}`} /></div>
            <div className="titulo-juego">{juego.nombre}</div>
            
            <Link to={`/juegoss/${juego.abreviacion}`} className="buttonLink">
              Ver Juegos
            </Link>
          </div>
    )
}